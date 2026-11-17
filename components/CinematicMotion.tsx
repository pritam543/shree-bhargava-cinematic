'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

export default function CinematicMotion({ children }: { children: React.ReactNode }) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        gsap.registerPlugin(ScrollTrigger);

        // 1. 120fps Cinema-Grade Inertial Scroll (Lenis)
        const lenis = new Lenis({
            lerp: 0.075,
            wheelMultiplier: 1.0,
            touchMultiplier: 1.5,
            smoothWheel: true,
        });

        let currentSkew = 0;
        lenis.on('scroll', (e: { velocity?: number }) => {
            ScrollTrigger.update();
            const targetSkew = gsap.utils.clamp(-2.2, 2.2, (e.velocity || 0) * 0.07);
            currentSkew += (targetSkew - currentSkew) * 0.15;
            gsap.set('.velocity-grid', { skewY: currentSkew, force3D: true });
        });

        let rafId: number;
        function raf(time: number) {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        }
        rafId = requestAnimationFrame(raf);

        // 2. GSAP Master 120fps Engine (Ordered Top-to-Bottom with Pin Offset Sync)
        const ctx = gsap.context(() => {
            // Top Amber-Gold Progress Bar
            gsap.to('.scroll-progress', {
                scaleX: 1,
                ease: 'none',
                scrollTrigger: {
                    trigger: document.body,
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: 0.06,
                },
            });

            // HERO: Deep Camera Dolly Zoom-Out + Left/Right Text Split
            gsap.fromTo(
                '.hero-zoom-img',
                { scale: 1.48, y: 0 },
                {
                    scale: 1.0,
                    y: '24%',
                    ease: 'none',
                    scrollTrigger: {
                        trigger: '.hero-section',
                        start: 'top top',
                        end: 'bottom top',
                        scrub: true,
                    },
                }
            );

            gsap.to('.hero-left-exit', {
                x: -100,
                y: -30,
                opacity: 0.15,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.hero-section',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                },
            });

            gsap.to('.hero-right-exit', {
                x: 100,
                y: -25,
                opacity: 0.15,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.hero-section',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                },
            });

            gsap.from('.hero-stagger', {
                y: 75,
                opacity: 0,
                duration: 1.25,
                stagger: 0.14,
                ease: 'power4.out',
                delay: 0.08,
            });

            // ALL 5 PINNED VIDEO-CLIP STORYBOARDS (High refreshPriority so lower sections calculate exact offsets)
            gsap.utils.toArray<HTMLElement>('.video-scrub-section').forEach((videoSection, idx) => {
                const slides = gsap.utils.toArray<HTMLElement>(videoSection.querySelectorAll('.video-frame-slide'));
                const captions = gsap.utils.toArray<HTMLElement>(videoSection.querySelectorAll('.video-frame-caption'));
                const bars = gsap.utils.toArray<HTMLElement>(videoSection.querySelectorAll('.video-step-bar'));
                const flashOverlay = videoSection.querySelector<HTMLElement>('.cinema-transition-flash');

                if (slides.length === 0) return;

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: videoSection,
                        start: 'top top',
                        end: () => `+=${(slides.length - 1) * 70}%`,
                        pin: true,
                        scrub: 0.5,
                        anticipatePin: 1,
                        invalidateOnRefresh: true,
                        refreshPriority: 30 - idx,
                    },
                });

                slides.forEach((slide, i) => {
                    const img = slide.querySelector('img');
                    const prevImg = i > 0 ? slides[i - 1].querySelector('img') : null;

                    if (i === 0) {
                        if (img) tl.fromTo(img, { scale: 1.04 }, { scale: 1.26, duration: 1 }, 0);
                        if (bars[0]) tl.fromTo(bars[0], { scaleX: 0.35 }, { scaleX: 1, duration: 1 }, 0);
                    } else {
                        if (prevImg) {
                            tl.to(prevImg, { scale: 1.38, filter: 'brightness(0.5)', duration: 0.6 }, i - 0.1);
                        }

                        if (flashOverlay) {
                            tl.fromTo(
                                flashOverlay,
                                { opacity: 0, xPercent: -100 },
                                { opacity: 0.45, xPercent: 0, duration: 0.25, ease: 'power2.in' },
                                i - 0.05
                            ).to(
                                flashOverlay,
                                { opacity: 0, xPercent: 100, duration: 0.4, ease: 'power2.out' },
                                i + 0.2
                            );
                        }

                        tl.fromTo(
                            slide,
                            { opacity: 0.2, clipPath: 'inset(0% 0% 0% 100%)' },
                            { opacity: 1, clipPath: 'inset(0% 0% 0% 0%)', duration: 0.9, ease: 'power3.inOut' },
                            i
                        );

                        if (img) {
                            tl.fromTo(
                                img,
                                { scale: 1.38, filter: 'brightness(1.18)' },
                                { scale: 1.04, filter: 'brightness(1)', duration: 1.25, ease: 'power2.out' },
                                i
                            );
                        }

                        if (bars[i]) {
                            tl.fromTo(bars[i], { scaleX: 0 }, { scaleX: 1, duration: 1 }, i);
                        }
                    }

                    if (captions[i]) {
                        if (i > 0 && captions[i - 1]) {
                            tl.to(captions[i - 1], { opacity: 0, x: -80, duration: 0.4 }, i);
                        }
                        if (i > 0) {
                            tl.fromTo(
                                captions[i],
                                { opacity: 0, x: 85 },
                                { opacity: 1, x: 0, duration: 0.6, ease: 'power3.out' },
                                i + 0.22
                            );
                        }
                    }
                });
            });

            // ALL 3 HORIZONTAL FILMSTRIP REELS
            gsap.utils.toArray<HTMLElement>('.horizontal-film-wrapper').forEach((hWrapper, hIdx) => {
                const hTrack = hWrapper.querySelector<HTMLElement>('.horizontal-film-track');
                if (!hTrack) return;

                gsap.to(hTrack, {
                    x: () => -(hTrack.scrollWidth - window.innerWidth + 100),
                    ease: 'none',
                    scrollTrigger: {
                        trigger: hWrapper,
                        start: 'top top',
                        end: () => `+=${Math.max(hTrack.scrollWidth - window.innerWidth, 450)}`,
                        pin: true,
                        scrub: 0.5,
                        invalidateOnRefresh: true,
                        refreshPriority: 20 - hIdx,
                    },
                });
            });

            // 100% UNIVERSAL IMAGE CONTINUOUS ZOOM
            gsap.utils.toArray<HTMLImageElement>('section img').forEach((img, idx) => {
                if (
                    img.classList.contains('hero-zoom-img') ||
                    img.closest('.video-scrub-section') ||
                    img.closest('.horizontal-film-wrapper') ||
                    img.closest('.split-wipe-wrapper')
                ) {
                    return;
                }
                const zoomIn = idx % 2 === 0;
                gsap.fromTo(
                    img,
                    { scale: zoomIn ? 1.0 : 1.26, y: zoomIn ? '-4%' : '4%' },
                    {
                        scale: zoomIn ? 1.26 : 1.0,
                        y: zoomIn ? '4%' : '-4%',
                        ease: 'none',
                        scrollTrigger: {
                            trigger: img.parentElement || img,
                            start: 'top bottom',
                            end: 'bottom top',
                            scrub: true,
                            invalidateOnRefresh: true,
                        },
                    }
                );
            });

            // SLIDE FROM LEFT (Includes "Spaces in focus", "Four pillars", "Precision engineering")
            gsap.utils.toArray<HTMLElement>('.slide-left').forEach((el) => {
                gsap.fromTo(
                    el,
                    { x: -115, opacity: 0.2, scale: 0.94 },
                    {
                        x: 0,
                        opacity: 1,
                        scale: 1,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: el,
                            start: 'top 92%',
                            end: 'top 42%',
                            scrub: 0.45,
                            invalidateOnRefresh: true,
                        },
                    }
                );
            });

            // SLIDE FROM RIGHT
            gsap.utils.toArray<HTMLElement>('.slide-right').forEach((el) => {
                gsap.fromTo(
                    el,
                    { x: 115, opacity: 0.2, scale: 0.94 },
                    {
                        x: 0,
                        opacity: 1,
                        scale: 1,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: el,
                            start: 'top 92%',
                            end: 'top 42%',
                            scrub: 0.45,
                            invalidateOnRefresh: true,
                        },
                    }
                );
            });

            // 3D PERSPECTIVE TILT & DEPTH ZOOM CARDS ("Four pillars of spatial mastery")
            gsap.utils.toArray<HTMLElement>('.tilt-card').forEach((card, idx) => {
                const dir = idx % 2 === 0 ? -1 : 1;
                gsap.fromTo(
                    card,
                    {
                        opacity: 0.2,
                        x: dir * 90,
                        y: 85,
                        scale: 0.86,
                        rotateY: dir * 16,
                        rotateX: 8,
                        transformPerspective: 1000,
                    },
                    {
                        opacity: 1,
                        x: 0,
                        y: 0,
                        scale: 1,
                        rotateY: 0,
                        rotateX: 0,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 94%',
                            end: 'top 42%',
                            scrub: 0.45,
                            invalidateOnRefresh: true,
                        },
                    }
                );
            });

            // PROJECT GRID & ZOOM BLOCKS ("Spaces in focus")
            gsap.utils.toArray<HTMLElement>('.projects-showcase-wrap').forEach((wrap) => {
                const cards = wrap.querySelectorAll('a, article, .project-card, :scope > div > div');
                if (cards.length > 0) {
                    cards.forEach((card, idx) => {
                        const fromX = idx % 3 === 0 ? -70 : idx % 3 === 2 ? 70 : 0;
                        gsap.fromTo(
                            card,
                            { y: 75, x: fromX, scale: 0.88, opacity: 0.25 },
                            {
                                y: 0,
                                x: 0,
                                scale: 1,
                                opacity: 1,
                                ease: 'power2.out',
                                scrollTrigger: {
                                    trigger: card,
                                    start: 'top 94%',
                                    end: 'top 45%',
                                    scrub: 0.45,
                                    invalidateOnRefresh: true,
                                },
                            }
                        );
                    });
                }
            });

            // WHY CHOOSE US FEATURE ROWS ("Precision engineering meets artistic soul")
            gsap.utils.toArray<HTMLElement>('.feature-row-item').forEach((row, idx) => {
                const icon = row.querySelector('svg');
                gsap.fromTo(
                    row,
                    { x: -85, y: 30, opacity: 0.2, scale: 0.94 },
                    {
                        x: 0,
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: row,
                            start: 'top 94%',
                            end: 'top 52%',
                            scrub: 0.4,
                            invalidateOnRefresh: true,
                        },
                    }
                );
                if (icon) {
                    gsap.fromTo(
                        icon,
                        { rotate: -35, scale: 0.6 },
                        {
                            rotate: 0,
                            scale: 1,
                            ease: 'back.out(1.7)',
                            scrollTrigger: {
                                trigger: row,
                                start: 'top 92%',
                                end: 'top 55%',
                                scrub: 0.4,
                                invalidateOnRefresh: true,
                            },
                        }
                    );
                }
            });

            // ZOOM-UP / SCALE-IN BLOCKS
            gsap.utils.toArray<HTMLElement>('.zoom-block').forEach((el) => {
                gsap.fromTo(
                    el,
                    { scale: 0.88, y: 65, opacity: 0.25 },
                    {
                        scale: 1,
                        y: 0,
                        opacity: 1,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: el,
                            start: 'top 94%',
                            end: 'top 46%',
                            scrub: 0.45,
                            invalidateOnRefresh: true,
                        },
                    }
                );
            });

            // DAY-TO-TWILIGHT SPLIT CURTAIN WIPE
            gsap.utils.toArray<HTMLElement>('.split-wipe-wrapper').forEach((wrap) => {
                const topLayer = wrap.querySelector<HTMLElement>('.split-wipe-top');
                const divider = wrap.querySelector<HTMLElement>('.split-wipe-divider');
                if (!topLayer) return;

                gsap.fromTo(
                    topLayer,
                    { clipPath: 'inset(0% 100% 0% 0%)' },
                    {
                        clipPath: 'inset(0% 0% 0% 0%)',
                        ease: 'none',
                        scrollTrigger: {
                            trigger: wrap,
                            start: 'top 82%',
                            end: 'bottom 22%',
                            scrub: 0.35,
                            invalidateOnRefresh: true,
                        },
                    }
                );

                if (divider) {
                    gsap.fromTo(
                        divider,
                        { left: '0%' },
                        {
                            left: '100%',
                            ease: 'none',
                            scrollTrigger: {
                                trigger: wrap,
                                start: 'top 82%',
                                end: 'bottom 22%',
                                scrub: 0.35,
                                invalidateOnRefresh: true,
                            },
                        }
                    );
                }
            });

            // CURTAIN IMAGE REVEALS
            gsap.utils.toArray<HTMLElement>('.curtain-frame').forEach((frame) => {
                gsap.fromTo(
                    frame,
                    { clipPath: 'inset(14% 7% 14% 7%)', scale: 0.94 },
                    {
                        clipPath: 'inset(0% 0% 0% 0%)',
                        scale: 1,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: frame,
                            start: 'top 94%',
                            end: 'top 34%',
                            scrub: 0.45,
                            invalidateOnRefresh: true,
                        },
                    }
                );
            });

            // ALL DUAL-DIRECTION MARQUEE BANDS
            gsap.utils.toArray<HTMLElement>('.marquee-band').forEach((band) => {
                const leftLine = band.querySelector('.marquee-left');
                const rightLine = band.querySelector('.marquee-right');

                if (leftLine) {
                    gsap.to(leftLine, {
                        xPercent: -24,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: band,
                            start: 'top bottom',
                            end: 'bottom top',
                            scrub: true,
                            invalidateOnRefresh: true,
                        },
                    });
                }

                if (rightLine) {
                    gsap.fromTo(
                        rightLine,
                        { xPercent: -24 },
                        {
                            xPercent: 4,
                            ease: 'none',
                            scrollTrigger: {
                                trigger: band,
                                start: 'top bottom',
                                end: 'bottom top',
                                scrub: true,
                                invalidateOnRefresh: true,
                            },
                        }
                    );
                }
            });

            // STAGGERED ZOOM & ALTERNATING LEFT/RIGHT CARDS
            gsap.utils.toArray<HTMLElement>('.stagger-grid').forEach((grid) => {
                const items = grid.querySelectorAll('.stagger-item');
                items.forEach((item, idx) => {
                    const fromX = idx % 3 === 0 ? -60 : idx % 3 === 2 ? 60 : 0;
                    const icon = item.querySelector('svg');

                    gsap.fromTo(
                        item,
                        { y: 60, x: fromX, opacity: 0.25, scale: 0.88 },
                        {
                            y: 0,
                            x: 0,
                            opacity: 1,
                            scale: 1,
                            ease: 'power2.out',
                            scrollTrigger: {
                                trigger: item,
                                start: 'top 95%',
                                end: 'top 50%',
                                scrub: 0.45,
                                invalidateOnRefresh: true,
                            },
                        }
                    );

                    if (icon) {
                        gsap.fromTo(
                            icon,
                            { rotate: -25, scale: 0.7 },
                            {
                                rotate: 0,
                                scale: 1,
                                ease: 'back.out(1.7)',
                                scrollTrigger: {
                                    trigger: item,
                                    start: 'top 92%',
                                    end: 'top 55%',
                                    scrub: 0.4,
                                    invalidateOnRefresh: true,
                                },
                            }
                        );
                    }
                });
            });

            // ANIMATED COUNTERS
            gsap.utils.toArray<HTMLElement>('.stat-counter').forEach((counter) => {
                const target = Number(counter.dataset.target || '0');
                const suffix = counter.dataset.suffix || '';
                const obj = { val: 0 };
                gsap.to(obj, {
                    val: target,
                    duration: 1.8,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: counter,
                        start: 'top 94%',
                        once: true,
                    },
                    onUpdate: () => {
                        counter.textContent = `${Math.round(obj.val)}${suffix}`;
                    },
                });
            });

            // CINEMATIC RISE REVEALS
            gsap.utils.toArray<HTMLElement>('.cinematic-reveal').forEach((el) => {
                gsap.fromTo(
                    el,
                    { y: 55, opacity: 0.25, scale: 0.95 },
                    {
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: el,
                            start: 'top 94%',
                            end: 'top 50%',
                            scrub: 0.45,
                            invalidateOnRefresh: true,
                        },
                    }
                );
            });

            // GOLD / AMBER LINE DRAW
            gsap.utils.toArray<HTMLElement>('.line-expand, .amber-bar').forEach((line) => {
                gsap.fromTo(
                    line,
                    { scaleX: 0, transformOrigin: 'left center' },
                    {
                        scaleX: 1,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: line,
                            start: 'top 95%',
                            end: 'top 62%',
                            scrub: 0.4,
                            invalidateOnRefresh: true,
                        },
                    }
                );
            });
        }, containerRef);

        // Refresh ScrollTrigger once images & pins settle so lower sections calculate exact positions
        const onLoad = () => ScrollTrigger.refresh();
        window.addEventListener('load', onLoad);
        const t1 = setTimeout(() => ScrollTrigger.refresh(), 500);
        const t2 = setTimeout(() => ScrollTrigger.refresh(), 1400);

        return () => {
            window.removeEventListener('load', onLoad);
            clearTimeout(t1);
            clearTimeout(t2);
            cancelAnimationFrame(rafId);
            ctx.revert();
            lenis.destroy();
        };
    }, []);

    return (
        <div ref={containerRef} className="relative bg-white text-[#121822]">
            <div className="scroll-progress fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#ffa500] via-[#ffd166] to-[#ffa500] z-50 origin-left scale-x-0 pointer-events-none" />
            {children}
        </div>
    );
}
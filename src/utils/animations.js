export const animateWithGsapTimeline = (timeline, rotationRef, rotationState, firstTarget, secondTarget, animationProps) => {
    timeline.to(rotationRef.current, {
        y: rotationState,
        duration: 1,
        ease: "power2.inOut",
    })

    timeline.to(
        firstTarget,
        {
            ...animationProps,
            ease: "power2.inOut",
        },
        // This symbolizes to insert the animation at the start of the previous animation
        '<'
    )

    timeline.to(
        secondTarget,
        {
            ...animationProps,
            ease: "power2.inOut",
        },
        // This symbolizes to insert the animation at the start of the previous animation
        '<'
    )
}
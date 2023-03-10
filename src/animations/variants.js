export const variants = (direction, delay, move) => {
    return {
        hidden: {
            y: direction === 'up' ? move : direction === 'down' ? -move : 0,
            opacity: 0,
            scale: direction === 'scale' ? 0.95 : 1, 
            x: direction === 'left' ? move : direction === 'right' ? -move : 0,

        },
        visible: {
            y: 0,
            x: 0,
            opacity: 1,
            scale: 1,
            transition: {
                type: 'tween',
                duration: 1.2,
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.75],
            },
        },
    }
}
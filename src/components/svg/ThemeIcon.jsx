import { motion, AnimatePresence } from "motion/react"
import useTheme from "../../hooks/useTheme"

const ThemeIcon = ({className }) => {
    const [theme] = useTheme()
    const moon = "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"
    const sun = "M8,12a4,4 0 1,0 8,0a4,4 0 1,0 -8,0"
    const sunRays = [
        "M12 2v2",
        "M12 20v2",
        "m4.93 4.93 1.41 1.41",
        "m17.66 17.66 1.41 1.41",
        "M2 12h2",
        "M20 12h2",
        "m6.34 17.66-1.41 1.41",
        "m19.07 4.93-1.41 1.41"
    ]


    return (
        <div className="cursor-pointer"  >
            <svg 
                className={`w-5 h-5 md:w-6 md:h-6 fill-none stroke-2 ${className} stroke-light-text-dark dark:stroke-dark-text-dark`}
                viewBox="0 0 24 24"
                strokeLinecap="round" 
                strokeLinejoin="round"
            >
                <AnimatePresence mode="wait" initial={false}>
                    {theme ==="dark" ? (
                        // Dark mode - show moon
                        <motion.g
                            key="moon"
                            initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                            animate={{ opacity: 1, rotate: 0, scale: 1 }}
                            exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                        >
                            <motion.path 
                                d={moon} 
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 0.25, delay: 0.05, ease: "easeOut" }}
                            />
                        </motion.g>
                    ) : (
                        // Light mode - show sun
                        <motion.g
                            key="sun"
                            initial={{ opacity: 0, rotate: 90, scale: 0.8 }}
                            animate={{ opacity: 1, rotate: 0, scale: 1 }}
                            exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                        >
                            <motion.path 
                                d={sun} 
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                            />
                            {sunRays.map((ray, index) => (
                                <motion.path 
                                    key={index}
                                    d={ray}
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{ pathLength: 1, opacity: 1 }}
                                    transition={{ 
                                        duration: 0.1, 
                                        delay: 0.2 + (index * 0.02),
                                        ease: "easeOut"
                                    }}
                                />
                            ))}
                        </motion.g>
                    )}
                </AnimatePresence>
            </svg>
        </div>
    )
}

export default ThemeIcon
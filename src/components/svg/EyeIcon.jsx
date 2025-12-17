import { motion } from "framer-motion"
import { useState } from "react"

const EyeIcon = ({ className, onClick, see = false }) => {


    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            className={`w-5 h-5 md:w-6 mg:h-6 fill-none stroke-2 ${className} stroke-light-text-muted dark:stroke-dark-text-muted`}

            onClick={(e) => onClick(e)}
        >
            <g>
                <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />

                <motion.path
                    className="stroke-light-text-muted dark:stroke-dark-text-muted"
                    d="m2 2 20 20"
                    stroke="currentColor"
                    strokeWidth={2}
                    initial={false}
                    animate={{
                        pathLength: see ? 1 : 0,
                        opacity: see ? 1 : 0,
                        transition: { duration: 0.3, ease: "easeInOut" }
                    }}
                    style={{ pointerEvents: "none" }}
                />
                <circle cx="12" cy="12" r="3" />
            </g>
        </svg>
    )
}

export default EyeIcon
import {motion} from 'framer-motion'
import {generateRandomDot} from '../../utils/shared'

export default function Dot() {
  let options = generateRandomDot()

    return (
      <motion.div
          className={`z-0 fixed top-${options.position.top} ${options.position.left ? 'left-' + options.position.left : 'right-' + options.position.right} w-${options.size} h-${options.size} bg-${options.color}-300 rounded-full mix-blend-multiply filter blur-lg`}
          initial={{ scale: 1, opacity: 0 }}
          animate={{ scale: options.scale, opacity: options.opacity }}
          transition={{
            repeat: Infinity, 
            duration: options.duration,
            delay: options.delay,
            repeatType: "mirror",
          }}
      />
    )
}
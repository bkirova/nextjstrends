import {motion} from 'framer-motion'

export default function Dot(props:any) {
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }
    return (
      <motion.div
      variants={variants}
      transition={{
        duration:props.options.duration
      }}
    >
    <motion.div
        className={`absolute top-${props.options.position.top} ${props.options.position.left ? 'left-' + props.options.position.left : 'right-' + props.options.position.right} w-${props.options.size} h-${props.options.size} bg-${props.options.color}-200 rounded-full mix-blend-multiply filter blur-lg`}
        initial={{ scale: 1, opacity: 1 }}
        animate={{ scale: props.options.scale, opacity: props.options.opacity }}
        transition={{
          repeat: Infinity, 
          duration: props.options.duration,
          delay: props.options.delay,
          repeatType: "mirror",
        }}
    />
    </motion.div>)
}
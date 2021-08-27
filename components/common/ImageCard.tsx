import { motion, AnimatePresence } from "framer-motion"

export default function Card(props: any) {

    return (
        <div className={`mx-3 mb-10 rounded-lg flex flex-col`}>
            <AnimatePresence exitBeforeEnter>
                    <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    key="expanded"
                    >
                        <div className="relative">
                                <motion.img
                                className='rounded-2xl shadow-2xl custom-image-100'
                                key={props.item.image}
                                src={props.item.image}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1}}
                                />
                        </div>
                    </motion.div>
                    
            </AnimatePresence>
        </div>
    )
}
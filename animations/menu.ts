export const menuVariants = {
  open: {
    opacity: 1,
    height: 'auto',
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 40,
      mass: 0.8,
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 40,
      mass: 0.8,
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
}

export const menuItemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
  closed: {
    opacity: 0,
    y: 20,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
}

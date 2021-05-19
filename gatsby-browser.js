import React from "react"
import {AnimatePresence} from 'framer-motion';
import Layout from "./src/components/Layout"

export function wrapPageElement({element, props}) {
    return <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>;
}
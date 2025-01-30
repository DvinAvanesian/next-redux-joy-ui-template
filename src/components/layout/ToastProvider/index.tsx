'use client'

import vazir from '@/res/fonts/vazir'
import { Toaster } from 'sonner'

const ToastProvider = () => <Toaster richColors closeButton className={vazir.className} position={'bottom-left'} dir={'rtl'} />

export default ToastProvider

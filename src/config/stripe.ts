import { loadStripe } from '@stripe/stripe-js';

const getStripe = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
const stripeProducts = {
    token: {
        KNRT: import.meta.env.VITE_STRIPE_PRODUCT_KNRT,
        CNRT: import.meta.env.VITE_STRIPE_PRODUCT_KNRT_TEST_CNRT,
    },
    matic: import.meta.env.VITE_STRIPE_PRODUCT_MATIC,
}
const stripeRedirections = {
    success: `http://${window.location.hostname}${window.location.port ? ':'+window.location.port:''}/payment/success`,
    cancel: `http://${window.location.hostname}${window.location.port ? ':'+window.location.port:''}/payment/failed`
}

export { getStripe, stripeProducts,stripeRedirections }
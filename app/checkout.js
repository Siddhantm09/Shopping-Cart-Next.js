import { loadStripe } from "@stripe/stripe-js";
export async function checkout({ lineItems }) {
    let stripepromise = null;
    const getStripe = () => {
        if (!stripepromise) {
            stripepromise = loadStripe(process.env.NEXT_API_ACCESS_KEY)
        }
        return stripepromise
    }
    const stripe = await getStripe();
    await stripe.redirectToCheckout({
        mode: 'payment',
        lineItems, successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
        cancelUrl: window.location.origin
    })
}

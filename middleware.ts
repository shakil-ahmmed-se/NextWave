
import middleware from 'next-auth/middleware'

export default middleware;
export const config = {
    // * zore or more parameters
    // + one or more parameters
    // ? zero or one parameter
    matcher: [ '/users/:id*'] // kono route project korar jonno ai middleware use kora hoy
} 
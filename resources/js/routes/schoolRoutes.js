// import modular routes
import webRoutes from "../modules/school/web/routes"
import authRoutes from "../modules/auth/routes"
import userRoutes from "../modules/user/routes"
 export default [...webRoutes, ...authRoutes, ...userRoutes]

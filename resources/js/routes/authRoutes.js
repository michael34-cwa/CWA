// import modular routes 
import webRoutes from "../modules/admin/web/routes"
import authRoutes from "../modules/auth/routes" 
import notFoundRoutes from "../modules/notFoundRoutes"; 

export default [...authRoutes,...notFoundRoutes]

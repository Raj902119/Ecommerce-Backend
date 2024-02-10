import passport from "passport";

export function isAuth(req,res,done){
    return passport.authenticate('jwt');
}

export  function sanitizeUser(user){
    return {id:user.id, role:user.role};
}
export function cookieExtractor (req){
    let token = null;
    if (req && req.cookies) {
      token = req.cookies['jwt'];
    }
    //TODO : this is temporary token for testing without cookie
    token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YzY1MTk3Zjk1Y2U1NTBlYmYyYmU3MSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzA3NDk2NTYwfQ.RHjI-NDZbrekZb-HYYHLX5OEtCks2gq6g1UdL666aJc"
    return token;
}
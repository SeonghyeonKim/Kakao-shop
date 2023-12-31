import { useEffect, useState } from "react";
import Box from "../atoms/Box";
import { NavLink } from "react-router-dom";
import Button from "../atoms/Button";
import { useDispatch } from "react-redux";
import { setEmail } from "../../store/slices/userSlice";

const staticServerUrl = process.env.REACT_APP_PATH || "";

/**
 * GNB 컴포넌트 생성
 * @returns GNB 컴포넌트
 */
const Gnb = () => {
    // const email = useSelector((state) => state.user.email);
    // 현재 로그인 상태 관리
    const [isLogin, setIsLogin] = useState(false);
    const dispatch = useDispatch();    
    
    useEffect(() => {
        const currentTime = new Date().getTime();
        const previousTime = localStorage.getItem('Time');

        // 시간 비교 : 1일
        if(currentTime - previousTime < 1000 * 60 * 60 * 24 && localStorage.getItem("token") != null) {
            setIsLogin(true);
        }
        else {
            localStorage.removeItem('token');
            localStorage.removeItem('Time');
            setIsLogin(false);
        }
    }, []);

    return (
        <div className="mb-3 border-b">
            <div className="px-4 mx-auto max-w-7xl"> 
                <div className="flex justify-between">
                    <NavLink className="flex items-center py-4" to={staticServerUrl + "/"}>
                        <img src={staticServerUrl + "/img/logoKakao.png"} width="100px" alt="logo"/>
                    </NavLink>
                    <Box className="flex items-center space-x-4">
                        <NavLink to={staticServerUrl + "/cart"}>
                            장바구니
                        </NavLink>
                        {isLogin === false &&
                            <NavLink to={staticServerUrl + "/login"}> 
                                로그인
                            </NavLink>
                        }
                        {isLogin === true &&
                            <Button onClick={() => {
                                localStorage.removeItem('Time');
                                localStorage.removeItem('token');
                                dispatch(setEmail({email: null}));
                                alert('로그아웃 되었습니다.');
                                window.location.href = staticServerUrl + '/';
                            }}>
                                로그아웃
                            </Button>
                        }
                        <NavLink to={staticServerUrl + "/signup"}>
                            회원가입
                        </NavLink>
                    </Box>
                </div>
            </div>
        </div>
    );
}

export default Gnb;
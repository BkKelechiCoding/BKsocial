import React, { useState } from "react";
import "../styles/home.css";
import card from "../img/bitcoin.png";
import card1 from "../img/social.png";
import card2 from "../img/sport.png";
import card3 from "../img/gambling.png";
import card4 from "../img/affliate.png";
import card5 from "../img/ecommerce.png";
import card6 from "../img/mlm1.png";
import card7 from "../img/reviews.png";
import card8 from "../img/survey.png";
import card9 from "../img/forex.png";
import card10 from "../img/arbitrage.jpg";
import card11 from "../img/hyip.jpg";
import card12 from "../img/plus.png";
import card13 from "../img/menu1.png";
import "../styles/modal.scss";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaUserTie,
  FaAngleDown,
  FaBitcoin
} from "react-icons/fa";
import Axios from "axios";

const Home = () => {
  const [changeBack, setChangeBack] = useState(true);
  const [change, setChange] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [email1, setEmail1] = useState("");
  const [password2, setPassword2] = useState("");
  const [user, setUser] = useState("");
  const [comments,setComments]= useState(false)
  const [searchs,setSearchs]=useState(false)

  const log = () => {
    console.log(password);

    Axios.post("http://localhost:8000/ok/do", {
      email: email,
      password: password,
    }).then(() => {
      console.log("success");
    });
  };

  const log1 = () => {
    console.log(email1);

    Axios.post("http://localhost:8000/ok/dom", {
      user: user,
      email1: email1,
      password2: password2,
    }).then(() => {
      console.log("success");
    });
  };

  // const [find,setFind]=useState('modal')

  //     window.onclick = function(event){
  // if(event.target == find){
  //     setChange(!change)
  // }
  //     }
  // const sem =()=>{
  //     const soap = document.getElementById('modal')
  //     soap.style.display ="none"
  // }

  const CategoriesList = [
    { img: card, text: "Cryptocurrency" },
    { img: card1, text: "Social" },
    { img: card2, text: "Sports" },
    { img: card3, text: "Gambling" },
    { img: card4, text: "Affliate" },
    { img: card5, text: "Ecommerce" },
    { img: card6, text: "MLM" },
    { img: card7, text: "Reviews" },
    { img: card8, text: "Surveys" },
    { img: card9, text: "Forex" },
    { img: card10, text: "Arbitrage" },
    { img: card11, text: "Hyip" },
  ];

  const Websites = [
    { commet: "7", website: " Www.Earner.com", like: "20", number: 1 },
    { commet: "7", website: " Www.Earner.com", like: "20", number: 2 },
    { commet: "7", website: " Www.Earner.com", like: "20", number: 3 },
    { commet: "7", website: " Www.Earner.com", like: "20", number: 4 },
    { commet: "7", website: " Www.Earner.com", like: "20", number: 5 },
    { commet: "7", website: " Www.Earner.com", like: "20", number: 6 },
    { commet: "7", website: " Www.Earner.com", like: "20", number: 7 },
    { commet: "7", website: " Www.Earner.com", like: "20", number: 8 },
    { commet: "7", website: " Www.Earner.com", like: "20", number: 9 },
    { commet: "7", website: " Www.Earner.com", like: "20", number: 10 },
    { commet: "7", website: " Www.Earner.com", like: "20", number: 11 },
    { commet: "7", website: " Www.Earner.com", like: "20", number: 12 },
    { commet: "7", website: " Www.Earner.com", like: "20", number: 13 },
    { commet: "7", website: " Www.Earner.com", like: "20", number: 14 },
    { commet: "7", website: " Www.Earner.com", like: "20", number: 15 },
    { commet: "7", website: " Www.Earner.com", like: "20", number: 16 },
    { commet: "7", website: " Www.Earner.com", like: "20", number: 17 },
    { commet: "7", website: " Www.Earner.com", like: "20", number: 18 },
  ];

  return (
    <div className={changeBack ? "surrond" : "surrond1 cloth"}>
      <div className="menuDivt">
        <div className={changeBack ? "header" : "header headerTy"}>
          <div className={changeBack ? "Kenfe" : " kenfe3"}>Earners.com</div>
          <div>
            <ul className="logInDiv">
              <li>
                <div className="toggle-switch">
                  <label>
                    <input type="checkbox" className="inputChe" />
                    <span
                      className="slider"
                      onClick={() => setChangeBack(!changeBack)}
                    ></span>
                  </label>
                </div>
              </li>
              <li className="appearance343">
                <img src={card12} className="shareCss12" />{" "}
              </li>
              <li className="appearance34">
                <a
                  href="#"
                  className="button__link"
                  onClick={() => setChange(!change)}
                >
                  <div className="logInPad gray">Log In</div>
                </a>
              </li>
              <li className="appearance341">
                <details>
                  <summary>
                    <div className="cbutton">Sign Up</div>
                    <div className="details-modal-overlay"></div>
                  </summary>
                  <div className="details-modal">
                    <div className="details-modal-title">
                      <h1 className="traffic">Welcome</h1>
                    </div>
                    <div className="details-modal-content">
                      {/* <p>
          You can click the X in the corner or click the overlay to close this modal.
          Something like this could be useful as a nice way to show additional information,
          but that's about as far as I would take it. It's just a nice way of styling the details element.
        </p> */}
                      {/* <div className="bodyFor">
                  <div style={{textAlign:"right",marginTop:"-20px"}}><span className="times" id="rer" onClick={()=>setChange(!change)}>&times;</span></div> */}
                      <form className="Fac">
                        <div className="details-modal-close">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M13.7071 1.70711C14.0976 1.31658 14.0976 0.683417 13.7071 0.292893C13.3166 -0.0976311 12.6834 -0.0976311 12.2929 0.292893L7 5.58579L1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L5.58579 7L0.292893 12.2929C-0.0976311 12.6834 -0.0976311 13.3166 0.292893 13.7071C0.683417 14.0976 1.31658 14.0976 1.70711 13.7071L7 8.41421L12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L8.41421 7L13.7071 1.70711Z"
                              fill="black"
                            />
                          </svg>
                        </div>
                        {/* <div className="weel">Welcome</div> */}
                        <input
                          type="text"
                          placeholder="username"
                          className="texy"
                          autoComplete={false}
                          onChange={(e) => setUser(e.target.value)}
                        />
                        <input
                          type="text"
                          placeholder="Email"
                          className="texy"
                          autoComplete={false}
                          onChange={(e) => setEmail1(e.target.value)}
                        />
                        <input
                          type="password"
                          placeholder="username/Email"
                          className="texy fgl"
                          autoComplete={false}
                          onChange={(e) => setPassword2(e.target.value)}
                        />
                        <div className="FORGoPas">Forgotten Password?</div>
                        <div className="ROGMA" onClick={log1}>
                          Register
                        </div>
                        <div className="TwittF">
                          <div className="speedvx"></div>
                          <span className="usu">
                            or use Facebook/Twitter/Google
                          </span>{" "}
                          <div className="speedvx"></div>
                        </div>
                        <div className="Giftto">
                          <div className=" popo45 Linkd">
                            <FaGooglePlusG className="IconBoy" />
                          </div>
                          <div className="popo45">
                            <FaFacebookF className="IconBoy" />
                          </div>
                          <div className=" popo45 popo1">
                            <FaTwitter className="IconBoy" />
                          </div>
                        </div>
                        <div className="AnEma">
                          want to create an account with email?{" "}
                          <span className="SIGNUP"> sign In</span>{" "}
                        </div>
                      </form>

                      {/* </div> */}
                    </div>
                  </div>
                </details>
              </li>
              {/* <li><img src={card13} alt="" className="menuDisplay"/></li> */}
              <li>
                <input type="checkbox" id="navi-toggle" className="checkbox" />
                <label for="navi-toggle" className="button">
                  <span className="icon">&nbsp;</span>
                </label>
                <div className="background">&nbsp;</div>

                <div className="Nav">
                  <div className="tr">
                    <span className="hallo">HALLO!</span>
                  </div>

                  <div className="formSlide">
                    <div className="REGISR">
                      <ul>
                        <li className="liquid">
                          <a className="LOgi">
                            <FaUserTie />
                            Login/Register
                          </a>
                        </li>
                        <li className="liquid">
                          <a>About Us</a>
                        </li>

                        <li className="liquid">
                          <a>Watch Tutorials</a>
                        </li>
                        <li className="liquid">
                          <a>Contact Us</a>
                        </li>
                        <li className="liquid">
                          <a>Subscribe Weekly</a>
                        </li>
                        <li className="liquid">
                          <a>Advertise With Us</a>
                        </li>
                        <li className="liquid">
                          <a>Disclammer</a>
                        </li>
                        <li className="liquid">
                          <a>Privacy</a>
                        </li>
                      </ul>
                    </div>
                    <div className="COMEON1">
                      <div className="COMEON">COME ON IN</div>
                      <div>
                        <form className="emailFRM">
                          <div classname="PHOLd">
                            {" "}
                            <input
                              type="email"
                              placeholder="username/email"
                              className="INTOTO"
                              onChange={(e) => {
                                setEmail(e.target.value);
                              }}
                            />
                          </div>
                          <div classname="PHOLd">
                            <input
                              type="password"
                              placeholder="password"
                              className="INTOTO"
                              onChange={(e) => {
                                setPassword(e.target.value);
                              }}
                            />
                          </div>
                          <button className="LOGMER" onClick={log}>
                            Log in
                          </button>
                          <p className="ForgotPass">
                            Forgot your password?{" "}
                            <a className="CLICKMEBRO">Click here to reset.</a>{" "}
                            If you don't have an account,{" "}
                            <a className="CLICKMEBRO1">
                              sign up with your email.
                            </a>
                            .
                          </p>
                        </form>
                      </div>
                      <div>
                        <span className="Spmea"></span>OR<span></span>
                      </div>
                      <div className="ConnectFacebook color3">
                        Google+ Connect
                      </div>
                      <div className="ConnectFacebook color1">
                        Facebook Connect
                      </div>
                      <div className="ConnectFacebook color2">
                        Twitter Connect
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* ==== another Div===*/}

        <div className={changeBack ? "headerDiv2" : "headerDiv2 hihi"}>
          <div className="div1">
            <form  className="ure">
              <input
                type="search"
                placeholder="Cryptocurrency"
                className="searchInput"
                onClick={()=>setSearchs(!searchs)}
              />


              {searchs? 
              <div className="ureFOOD">
                  <div>Bitcoin</div>
                  <div>Litcoin</div>
                  <div>Ether</div>
              </div>
              :""}
            </form>
          </div>
          <div className="div2">

              <div className="selectDiv">
            <div className="select">
  <select id="standard-select">
    <option value="Option 1">Binance.com</option>
    <option value="Option 2">kuda.com</option>
    <option value="Option 3">coinbase.com</option>
    <option value="Option 4">Option 4</option>
    <option value="Option 5">Option 5</option>
    <option value="Option length">Option that has too long of a value to fit</option>
  </select>
  <span className="focus"></span>
</div>
            <div className="Popular goingFR">

                

            <div className="kuda1">
  <select id="standard-select">
    <option value="Option 1"><FaBitcoin/>All</option>
    <option value="Option 2"><FaBitcoin/>Popular</option>
    <option value="Option 3"><FaBitcoin/>New</option>
    
    {/* <option value="Option length">Option that has too long of a value to fit</option> */}
  </select>
  <span className="focus"></span>
</div>

            <div className ="popop">
              <div className="ppp">
                <span>POPULAR</span>
                {/* <img src="/img/dropdown.png" alt className="dropdown" /> */}
                <FaAngleDown className="dropdown"/>



              </div>
              <div className="pats">
                <div className="New">New </div>
                <div className="New">Low Risk</div>
                <div className="New">Medium Risk</div>
                <div className="New">High Risk</div>
                <div></div>
              </div>
              </div>
            </div>
            </div>
          </div>
          <div className="div3 emeka">
            <div className="div4">
              <div style={{width:"33%"}}></div>
              <div style={{width:"33%"}}>
                <div className="briefInfo"> INFO</div>
              </div>
              <div style={{width:"33%"}}>
                <div className="share">
                  <img src="/img/facebook.png" className="shareCss" />
                  <img src="/img/twitter.png" className="shareCss1" />
                  <img src="/img/reddit.png" className="shareCss1" />
                  <img src="/img/whatsapp.png" className="shareCss1" />
                  <img src="/img/telegram.png" className="shareCss1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  another  div */}
      <div className="sectionDiv">
        <div className="sectionDiv1">
          <div className="categoryDiv">
            <div className={changeBack ? "liftUp" : "liftUp liftUp1"}>
              CATEGORIES
            </div>
            <div>
              {CategoriesList.map((text) => (
                <ul>
                  <li className={changeBack ? "texf" : "texp"}>
                    <img src={text.img} alt="" className="crypto" />
                    <span className={changeBack ? "textF" : " textF cloth"}>
                      {text.text}
                    </span>
                  </li>
                  {/* <li>Hacker News</li>
                             <li>Medium</li>
                             <li>dribble</li>
                             <li>product</li>
                             <li>Designer news</li> */}
                </ul>
              ))}
              <div className="space"></div>
            </div>
          </div>
        </div>
        <div className="sectionDiv2">
          <div className="categoryDiv2">
            <div className={changeBack ? "WebsitesDiv" : " WebsitesDiv cloth1"}>
              WEBSITES
            </div>

            <ul className="footbar">
              {Websites.map((websites) => (
                <li>
                  <div className="numberDiv">
                    <div className="number">{websites.number}</div>
                    <div>
                      <div className="AmishP">
                        <p className="proofitT">{websites.website}</p>
                        <div className="points">
                          <div className="hours">{websites.like} likes</div>
                          <div className="hours hours1">
                            {" "}
                            {websites.commet} comments
                          </div>
                          {/* <div className="hours hours1"> 2 hours  ago by nafij</div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="sectionDiv3">
          <div className="categoryDiv3 ">
            <div className="profile">


            <div className="div3 chuksEme">
            <div className="div4">
              <div style={{width:"33%"}}></div>
              <div style={{width:"33%"}}>
                <div className="briefInfo"> INFO</div>
              </div>
              <div style={{width:"33%"}}>
                <div className="share">
                  <img src="/img/facebook.png" className="shareCss" />
                  <img src="/img/twitter.png" className="shareCss1" />
                  <img src="/img/reddit.png" className="shareCss1" />
                  <img src="/img/whatsapp.png" className="shareCss1" />
                  <img src="/img/telegram.png" className="shareCss1" />
                </div>
              </div>
            </div>
          </div>



              <div className="profileHeader">
                Amish Population Profile, 2022 – Amish Studies
              </div>
              <p className={changeBack ? "America " : " America cloth"}>
                Population. The estimated population of the Amish of North
                America (adults and children) as of June 2022 is 373,620. This
                is an increase of approximately 12,150 since 2021.
              </p>
              <p className={changeBack ? "America " : " America cloth"}>
                States and Provinces. North American Amish communities are
                located in 32 states and four Canadian provinces. Approximately
                62 percent of the North American population lives in Ohio,
                Pennsylvania, and Indiana.
              </p>
              <p className={changeBack ? "America " : " America cloth"}>
                South America. In the fall of 2015, horse-and-buggy-driving New
                Order Amish from the Midwest organized two settlements in South
                America—one in Bolivia and one in Argentina. Each settlement has
                one congregation. Most of the members come from Old Colony
                Mennonite background. Today, these settlements relate to New
                Order Amish communities in Ohio, Indiana, and North Carolina.
              </p>
              <p className={changeBack ? "America " : " America cloth"}>
                Settlements. During the past year, 19 new settlements
                (geographical communities) were established and five existing
                settlements dissolved. New settlements are typically small, with
                only a few families in a single church district (congregation).
              </p>
              <p className={changeBack ? "America " : " America cloth"}>
                Forty-nine percent of all Amish settlements in North America
                contain only a single church district. Older settlements such as
                those in the Holmes County, Ohio, and Lancaster, Pennsylvania,
                areas contain more than 200 districts. (See Twelve Largest
                Settlements.) Larger settlements may have several different
                subgroups whereas smaller ones typically have just one subgroup.
              </p>
              <p className={changeBack ? "America" : " America cloth"}>
                Districts. In North America, the number of districts
                (congregations), each of which generally consists of 20 to 40
                families, grew from 2,718 in 2021 to 2,827 in 2022, an increase
                of 109 in the twelve-month period.
              </p>
              <p className={changeBack ? "America" : " America cloth"}>
                Growth Trends, 2000-2022. The North American Amish population
                grew by an estimated 195,710 since 2000, increasing from
                approximately 177,910 in 2000 to 373,620 in 2022, an increase of
                110 percent. The Amish population doubles about every 20 years.
                Since 2000, the number of districts has grown from 1,335 to
                2,827, an increase of 1,492 districts. The same period saw a net
                gain of 303 settlements, including settlements in six new states
                (Colorado, Nebraska, New Mexico, South Dakota, Vermont, and
                Wyoming) and three new provinces (Manitoba, New Brunswick, and
                Prince Edward Island).
              </p>
              <p className={changeBack ? "America" : "America cloth"}>
                Reasons for Population Growth. The primary forces driving the
                growth are sizable nuclear families (five or more children on
                average) and an average retention rate (Amish children who join
                the church as young adults) of 85 percent or more. A few
                outsiders have joined the Amish, but the growth is almost
                entirely from within the Amish community.
              </p>
              <p className={changeBack ? "America" : "America cloth"}>
                Reasons for Creating New Settlements. The Amish establish new
                settlements for a variety of reasons, including a desire for:
                (1) fertile farmland at reasonable prices, (2) nonfarm work in
                specialized occupations, (3) rural isolation that supports their
                traditional, family-based lifestyle, (4) social and physical
                environments (climate, governments, services, economy) conducive
                to their way of life, (5) proximity to family or other similar
                Amish church groups, and (6) a way to resolve church or
                leadership conflicts.
              </p>
              <p className={changeBack ? "America" : "America cloth"}>
                Note: Population estimates for 2022 were calculated using a
                variety of sources including Raber’s New American Almanac,
                reports by correspondents in Die Botschaft, The Budget, and The
                Diary, settlement directories, regional newsletters, and
                settlement informants. The data includes all Amish groups that
                use horse-and-buggy transportation, but excludes car-driving
                groups such as the Beachy Amish and Amish Mennonites.
              </p>
              <p className={changeBack ? "America" : "America cloth"}>
                To cite this page: “Amish Population Profile, 2022.” Young
                Center for Anabaptist and Pietist Studies, Elizabethtown
                College.
                http://groups.etown.edu/amishstudies/statistics/amish-population-profile-2022.
              </p>
              <div className={!comments ? "LikeAndCommentDiv" : "LikeAndCommentDiv infuna"}>
                <div className="Like">Like</div>
                <div className="Like1" onClick={()=>setComments(!comments)}>Comment</div>
              </div>

              {comments ? 
              <div>
                  <form className="yesMy">
                      <textarea placeholder="wite anything"  name="message" rows="10" cols="30"  className="yesM">
                          write anything
                      </textarea>
                      <button className="Submiiy">Submit</button>
                  </form>
              </div>
              : ""}
            </div>
          </div>
        </div>
      </div>

      {/* ====  For Login ==== */}
      {/* {change ?  */}
      {/* //  <div className="modal-wrapper" id="modal"  >
            //           <div className="modal-body ">
            //               <div>
            //                   <div></div>
            //                   <span className="ModallaClose">&times;</span>
            //               </div>
            //           </div>
            //           <a href="#!" className="outside-trigger"></a>
            //  </div> */}

      {change ? (
        <div className="modal-wrapper" id="modal">
          <div className="modal-body card">
            <div className="bodyFor">
              <div style={{ textAlign: "right", marginTop: "-20px" }}>
                <span
                  className="times"
                  id="rer"
                  onClick={() => setChange(!change)}
                >
                  &times;
                </span>
              </div>
              <form className="Fac">
                <div className="weel">Welcome</div>
                <input
                  type="text"
                  placeholder="username/Email"
                  className="texy"
                  autoComplete={false}
                />
                <input
                  type="password"
                  placeholder="username/Email"
                  className="texy fgl"
                />
                <div className="FORGoPas">Forgotten Password?</div>
                <div className="ROGMA">Log In</div>
                <div className="TwittF">
                  <div className="useFZ"></div>
                  <span className="orUse">
                    or use Facebook/Twitter/Google
                  </span>{" "}
                  <div className="useFZ"></div>
                </div>
                <div className="Giftto">
                  <div className="popo">
                    <FaFacebookF className="IconBoy" />
                  </div>
                  <div className=" popo Linkd">
                    <FaGooglePlusG className="IconBoy" />
                  </div>
                  <div className=" popo popo1">
                    <FaTwitter className="IconBoy" />
                  </div>
                </div>
                <div className="AnEma">
                  want to create an account with email?{" "}
                  <span className="SIGNUP"> sign Up</span>{" "}
                </div>
              </form>
            </div>
          </div>
          <a href="#!" className="outside-trigger"></a>
        </div>
      ) : (
        " "
      )}

      {/* :" "} */}
    </div>
  );
};

export default Home;

import React, { useState } from 'react';
import { Collapse } from 'antd';
import type { CollapseProps } from 'antd';
interface Logo {
  id: number;
  imageUrl: string;
  altText: string;
}
const { Panel } = Collapse;

const faqData = [
  {
    Header: 'Where can I watch? ',
    key: '1',
    content:
      'Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. ',
    img: '/image/faq.png',
  },
  {
    Header: 'Mauris id nibh eu fermentum mattis purus?',
    key: '2',
    content: '',
    img: '',
  },
  {
    Header: 'Eros imperdiet rhoncus? ',
    key: '3',
    content: '',
    img: '',
  },
  {
    Header: 'Fames imperdiet quam fermentum? ',
    key: '4',
    content: '',
    img: '',
  },
  {
    Header: 'Varius vitae, convallis amet lacus sit aliquet nibh?',
    key: '5',
    content: '',
    img: '',
  },
  {
    Header: 'Tortor nisl pellentesque sit quis orci dolor?',
    key: '6',
    content: '',
    img: '',
  },
  {
    Header: 'Vestibulum mauris mauris elementum proin amet auctor ipsum nibh sollicitudin?',
    key: '7',
    content: '',
    img: '',
  },
];
const firstThreeItems = faqData.slice(0, 3);
const remainingItems = faqData.slice(3);
const logos = [
  {
    id: 1,
    img: '/svg/visa.svg',
    text: 'visa',
  },
  {
    id: 2,
    img: '/svg/around.svg',
    text: 'visa',
  },
  {
    id: 3,
    img: '/svg/paytm.svg',
    text: 'visa',
  },
  {
    id: 4,
    img: '/svg/zalo.svg',
    text: 'visa',
  },
  {
    id: 5,
    img: '/svg/momo.svg',
    text: 'visa',
  },
  {
    id: 6,
    img: '/svg/vietcombank.svg',
    text: 'visa',
  },
  {
    id: 7,
    img: '/svg/viettinbank.svg',
    text: 'visa',
  },
  {
    id: 8,
    img: '/svg/tpbank.svg',
    text: 'visa',
  },
  {
    id: 9,
    img: '/svg/techcombank.svg',
    text: 'visa',
  },
  {
    id: 10,
    img: '/svg/vib.svg',
    text: 'visa',
  },
  {
    id: 11,
    img: '/svg/hdbank.svg',
    text: 'visa',
  },
  {
    id: 12,
    img: '/svg/acb.svg',
    text: 'visa',
  },
];

const test = [
  {
    title: 'oke',
    desc: 'adjwidhw',
    img: '/rlll',
    key: 0,
  },
  {
    title: 'oke',
    desc: 'adjwidhw',
    img: '/rlll',
    key: 1,
  },
  {
    title: 'oke',
    desc: 'adjwidhw',
    img: '/rlll',
    key: 2,
  },
  {
    title: 'oke',
    desc: 'adjwidhw',
    img: '/rlll',
    key: 3,
  },
];
const Social: React.FC = () => {
  const [collapse, setCollapse] = useState([]) as any;

  const toggleCollapse = (key: number) => {
    const isExist = collapse?.includes(key);
    if (isExist) {
      const newCollapse = collapse?.filter((item: any) => item !== key);
      return setCollapse(newCollapse);
    }
    setCollapse((prev: any[]) => [...prev, key]);
  };

  return (
    <div className="sociall">
      <div className="social">
        <div className="title">Social networking services</div>
        <div className="titlee">
          <div className="best">Best</div>
          <div className="and">and</div>
          <div className="cheapest">Cheapest</div>
        </div>
        <div className="professional">We are a professional provider of Twitter (X) Social Networking Services:</div>
        <div className="liWith">
          <div className="liWithlikes">
            <img src="\svg\ellipse.svg" alt="" />
            <div>Increase likes, Followers, Pull members.</div>
          </div>
          <div className="liWithlikes">
            <img src="\svg\ellipse.svg" alt="" />
            <div>Fastest speed, cheapest and most effective cost.</div>
          </div>
        </div>
      </div>
      <div className="image">
        <div className="dashboard">
          <img src="/image/dashboard.png" alt="" />
        </div>
      </div>
      <div className="applogo">
        <div className="payment">Payment methods</div>
        <div className="app">
          {logos.slice(0, 6).map((logo) => (
            <img key={logo.id} src={logo.img} alt={logo.text} className="logo" />
          ))}
          {logos.slice(6, 12).map((logo) => (
            <img key={logo.id} src={logo.img} alt={logo.text} className="logo" />
          ))}
        </div>
      </div>
      <div className="choose">
        <div className="choosee">
          <div className="choosefi">
            <p className="shop">XSpeeder.shop</p>
            <p className="why">Why choose XSpeeder.shop as a Best SMM reseller panel?</p>
          </div>
        </div>
        <div className="choosese">
          <div className="topic">
            <div className="number"> 1</div>
            <div className="psm">Free child panel</div>
            <div className="pbi">
              XSpeeder.shop offer Free Child Panel like us (different design ) to Elite, VIP or Master Members for life
              time.
            </div>
          </div>
          <div className="topic">
            <div className="number"> 2</div>
            <div className="psm">Cheapest price</div>
            <div className="pbi">
              XSpeeder.shop offer cheapest price services in whole market. We can beat any SMM reseller panel in market.
            </div>
          </div>
          <div className="topic">
            <div className="number"> 3</div>
            <div className="psm">24/7 support</div>
            <div className="pbi">
              Our SMM panel has a 24/7 customer support team that is ready to help you with your questions.
            </div>
          </div>
        </div>
      </div>
      <div className="network">
        <div className="text">
          <div className="pf">#1 social network services cheapest assembly on the market</div>
          <div className="ps">
            XSpeeder.shop is a website providing social networking services and SEO services cheapest. The interface is
            extremely customer and reseller friendly where everyone can easily use the service to reach more customers
            on social networks. Our website helps users achieve the goal of Twitter Likes, Followers and many other
            social networking Services.
          </div>
          <button className="bt">Sign up now</button>
        </div>
        <div className="imagee">
          <img className="img" src="/image/network.png" alt="" />
        </div>
      </div>
      <div className="faq">
        <div className="shop">FAQ XSpeeder.shop</div>
        <div className="frequently">Frequently asked questions</div>
        <div className="collapse-container">
          <Collapse defaultActiveKey={['1']} bordered={false}>
            {firstThreeItems.map((data) => (
              <Panel className="panel" header={data.Header} key={data.key}>
                <p className="content">{data.content}</p>
                <div className="img">
                  <img className="imgg" src={data.img} alt="" />
                </div>
              </Panel>
            ))}
          </Collapse>
          <Collapse className="coll" defaultActiveKey={['1']} bordered={false}>
            {remainingItems.map((data) => (
              <Panel className="panel" header={data.Header} key={data.key}>
                <p className="content">{data.content}</p>
                <div className="img">
                  <img src={data.img} alt="" />
                </div>
              </Panel>
            ))}
          </Collapse>
        </div>
      </div>
      <div className="join">
        <div className="pf">HOPE THAT IS ENOUGH!</div>
        <div className="ps">Join XSpeeder.shop</div>
        <div className="pt">Subscrible to update news about us.</div>
        <div className="email">
          <input type="email" placeholder="Enter email" className="email-input" />
          <button type="button" className="submit-button">
            Submit
          </button>
        </div>
      </div>

      {/* <div>
        {test?.map((item: any, k: number) => (
          <div key={k}>
            <div>
              {item?.title}
              <img onClick={() => toggleCollapse(item?.key)} src="" alt="" />
            </div>
            <div hidden={!collapse?.includes(item?.key)}>
              <div>{item?.desc}</div>
              <img src={item?.img} alt="" />
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Social;

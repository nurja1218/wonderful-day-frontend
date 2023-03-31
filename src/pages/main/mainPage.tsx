import React, { useState } from 'react';
import { Breadcrumb, Button, Layout, Menu, MenuProps, theme } from 'antd';
import { AiOutlineUser, AiOutlineMenuFold, AiOutlineMenuUnfold, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { GiClothes } from 'react-icons/gi';
import { TiWeatherPartlySunny } from 'react-icons/ti';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Weather', '1', <TiWeatherPartlySunny />),
    getItem('Outfit', '2', <GiClothes />),
    getItem('User', 'sub1', <AiOutlineUser />, [
        getItem('Settings', 'sub1-1'),
        getItem('Calendar', 'sub1-2'),
    ]),
];

export default function MainPage() {
    const [isHide, setIsHide] = useState<boolean>(true)
    const [isClose, setIsClose] = useState(true);
    // const [menuKey, setMenuKey] = useState<>()

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const handleSiderHide = () => {
        if (isHide) {
            setIsHide(false)
        } else {
            setIsHide(true)
        }
    }

    const handleSiderOpen = () => {
        if (isClose) {
            setIsClose(false)
        } else {
            setIsClose(true)
        }
    }

    const handleMenuSelect = (menu: any) => {
        const key = menu?.key
        if (key.includes('sub')) {
            console.log(key);
            console.log('menu: ', menu);
            console.log(items.map((_item) => console.log(_item)));
            const item = items.find((_item) => _item && _item.key === key)
            console.log('item: ', item);
        }
    }

    return (
        <Layout style={{ minHeight: '100vh' }}>
            {isHide && <Sider collapsed={isClose}>
                <div onClick={handleSiderOpen} style={{ margin: 20 }} >
                    {isClose
                        ? <AiOutlineRight style={{ color: 'white' }} />
                        : <AiOutlineLeft style={{ color: 'white' }} />
                    }
                </div>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} onSelect={handleMenuSelect} />
            </Sider>}
            <Layout className="site-layout">
                <Header style={{ padding: 0, background: colorBgContainer }} >
                    <Button onClick={handleSiderHide} style={{ marginBottom: 16 }}>
                        {isHide ? <AiOutlineMenuUnfold /> : <AiOutlineMenuFold />}
                    </Button>
                </Header>
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb items={[{ title: 'User' }, { title: 'Settings' }]} style={{ margin: '16px 0' }} />
                    <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
                        wonderful day
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>©Created by Jayden</Footer>
            </Layout>
        </Layout >
    );
}


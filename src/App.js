import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Fragment } from 'react';

import { publicRoutes } from '~/routes';
import DefaultLayout from './layouts';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((item, index) => {
                        const Page = item.component;
                        let Layout = DefaultLayout;

                        if (item.layout) {
                            Layout = item.layout;
                        } else if (item.layout === null) Layout = Fragment;

                        return (
                            <Route
                                key={index}
                                path={item.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;

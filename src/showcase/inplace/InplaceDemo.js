import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Inplace,InplaceDisplay,InplaceContent} from '../../components/inplace/Inplace';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';
import {InputText} from '../../components/inputtext/InputText';
import {DataTable} from '../../components/datatable/DataTable';
import {Column} from '../../components/column/Column';
import {CarService} from '../service/CarService';
import { LiveEditor } from '../liveeditor/LiveEditor';

export class InplaceDemo extends Component {

    constructor() {
        super();
        this.state = {
            cars: []
        };
        this.carservice = new CarService();

        this.onOpen = this.onOpen.bind(this);
    }

    onOpen() {
        this.carservice.getCarsSmall().then(data => this.setState({cars: data}));
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Inplace</h1>
                        <p>Inplace provides an easy to do editing and display at the same time where clicking the output displays the actual content.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("inplace")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Input</h3>
                    <Inplace closable={true}>
                        <InplaceDisplay>
                            Click to Edit
                        </InplaceDisplay>
                        <InplaceContent>
                            <InputText autoFocus />
                        </InplaceContent>
                    </Inplace>

                    <h3>Image</h3>
                    <Inplace>
                        <InplaceDisplay>
                            <span className="pi pi-search" style={{verticalAlign: 'middle'}}></span>
                            <span style={{marginLeft:'.5em', verticalAlign: 'middle'}}>View Picture</span>
                        </InplaceDisplay>
                        <InplaceContent>
                            <img src="showcase/demo/images/galleria/galleria5.jpg" alt="Nature" />
                        </InplaceContent>
                    </Inplace>

                    <h3>Lazy Data</h3>
                    <Inplace onOpen={this.onOpen}>
                        <InplaceDisplay>
                            View Data
                        </InplaceDisplay>
                        <InplaceContent>
                            <DataTable value={this.state.cars}>
                                <Column field="vin" header="Vin" />
                                <Column field="year" header="Year" />
                                <Column field="brand" header="Brand" />
                                <Column field="color" header="Color" />
                            </DataTable>
                        </InplaceContent>
                    </Inplace>
                </div>

                <InplaceDoc></InplaceDoc>
            </div>
        )
    }
}

export class InplaceDoc extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0
        };

        this.sources = {
            'app': {
                tabName: 'Source',
                content: `
import React, { Component } from 'react';
import {Inplace,InplaceDisplay,InplaceContent} from 'primereact/inplace';
import {InputText} from 'primereact/inputtext';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {CarService} from '../service/CarService';

export class InplaceDemo extends Component {

    constructor() {
        super();
        this.state = {
            cars: []
        };
        this.carservice = new CarService();

        this.onOpen = this.onOpen.bind(this);
    }

    onOpen() {
        this.carservice.getCarsSmall().then(data => this.setState({cars: data}));
    }

    render() {
        return (
            <div>
                <h3>Input</h3>
                <Inplace closable={true}>
                    <InplaceDisplay>
                        Click to Edit
                    </InplaceDisplay>
                    <InplaceContent>
                        <InputText autoFocus />
                    </InplaceContent>
                </Inplace>

                <h3>Image</h3>
                <Inplace>
                    <InplaceDisplay>
                        <span className="pi pi-search" style={{verticalAlign: 'middle'}}></span>
                        <span style={{marginLeft:'.5em', verticalAlign: 'middle'}}>View Picture</span>
                    </InplaceDisplay>
                    <InplaceContent>
                        <img src="showcase/demo/images/galleria/galleria5.jpg" srcSet="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt="Nature" />
                    </InplaceContent>
                </Inplace>

                <h3>Lazy Data</h3>
                <Inplace onOpen={this.onOpen}>
                    <InplaceDisplay>
                        View Data
                    </InplaceDisplay>
                    <InplaceContent>
                        <DataTable value={this.state.cars}>
                            <Column field="vin" header="Vin" />
                            <Column field="year" header="Year" />
                            <Column field="brand" header="Brand" />
                            <Column field="color" header="Color" />
                        </DataTable>
                    </InplaceContent>
                </Inplace>
            </div>
        )
    }
}
                `
            },
            'hooks': {
                tabName: 'Hooks Source',
                content: `
import React, { useState } from 'react';
import {Inplace,InplaceDisplay,InplaceContent} from 'primereact/inplace';
import {InputText} from 'primereact/inputtext';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {CarService} from '../service/CarService';

const InplaceDemo = () => {
    const [cars, setCars] = useState([]);
    const carservice = new CarService();

    const onOpen = () => {
        carservice.getCarsSmall().then(data => setCars(data));
    };

    return (
        <div>
            <h3>Input</h3>
            <Inplace closable={true}>
                <InplaceDisplay>
                    Click to Edit
                </InplaceDisplay>
                <InplaceContent>
                    <InputText autoFocus />
                </InplaceContent>
            </Inplace>

            <h3>Image</h3>
            <Inplace>
                <InplaceDisplay>
                    <span className="pi pi-search" style={{verticalAlign: 'middle'}}></span>
                    <span style={{marginLeft:'.5em', verticalAlign: 'middle'}}>View Picture</span>
                </InplaceDisplay>
                <InplaceContent>
                    <img src="showcase/demo/images/galleria/galleria5.jpg" srcSet="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt="Nature" />
                </InplaceContent>
            </Inplace>

            <h3>Lazy Data</h3>
            <Inplace onOpen={onOpen}>
                <InplaceDisplay>
                    View Data
                </InplaceDisplay>
                <InplaceContent>
                    <DataTable value={cars}>
                        <Column field="vin" header="Vin" />
                        <Column field="year" header="Year" />
                        <Column field="brand" header="Brand" />
                        <Column field="color" header="Color" />
                    </DataTable>
                </InplaceContent>
            </Inplace>
        </div>
    )
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React, { useState } from 'react';
import {Inplace,InplaceDisplay,InplaceContent} from 'primereact/inplace';
import {InputText} from 'primereact/inputtext';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {CarService} from '../service/CarService';

const InplaceDemo = () => {
    const [cars, setCars] = useState([]);
    const carservice = new CarService();

    const onOpen = () => {
        carservice.getCarsSmall().then(data => setCars(data));
    };

    return (
        <div>
            <h3>Input</h3>
            <Inplace closable={true}>
                <InplaceDisplay>
                    Click to Edit
                </InplaceDisplay>
                <InplaceContent>
                    <InputText autoFocus />
                </InplaceContent>
            </Inplace>

            <h3>Image</h3>
            <Inplace>
                <InplaceDisplay>
                    <span className="pi pi-search" style={{verticalAlign: 'middle'}}></span>
                    <span style={{marginLeft:'.5em', verticalAlign: 'middle'}}>View Picture</span>
                </InplaceDisplay>
                <InplaceContent>
                    <img src="showcase/demo/images/galleria/galleria5.jpg" srcSet="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt="Nature" />
                </InplaceContent>
            </Inplace>

            <h3>Lazy Data</h3>
            <Inplace onOpen={onOpen}>
                <InplaceDisplay>
                    View Data
                </InplaceDisplay>
                <InplaceContent>
                    <DataTable value={cars}>
                        <Column field="vin" header="Vin" />
                        <Column field="year" header="Year" />
                        <Column field="brand" header="Brand" />
                        <Column field="color" header="Color" />
                    </DataTable>
                </InplaceContent>
            </Inplace>
        </div>
    )
}
                `
            }
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.activeIndex !== nextState.activeIndex) {
            return true;
        }

        return false;
    }

    renderSourceButtons() {
        return (
            <div className="source-button-group">
                <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/inplace" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    <span>View on GitHub</span>
                </a>
                <LiveEditor name="InplaceDemo" sources={this.sources} service="CarService" data="cars-small" activeButtonIndex={this.state.activeIndex - 1} />
            </div>
        )
    }

    render() {
        const sourceButtons = this.renderSourceButtons();

        return (
            <div className="content-section documentation">
                <TabView activeIndex={this.state.activeIndex} onTabChange={(e) => this.setState({ activeIndex: e.index })}>
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
<CodeHighlight className="language-javascript">
{`
import {Inplace} from 'primereact/inplace';

`}
</CodeHighlight>

            <h3>Getting Started</h3>
            <p>Inplace requires InplaceDisplay and InplaceContent component as children to define the content to display in each state. Active state of the inplace
                can either be managed as a Controlled or Uncontrolled component.</p>

            <p>In controlled mode, <i>active</i> and <i>onToggle</i> properties need to be defined to control the active state.</p>
                <CodeHighlight className="language-jsx">
{`
<Inplace active={this.state.active} onToggle={(e) => this.setState({active: e.value})}>
    <InplaceDisplay>
        Click to Edit
    </InplaceDisplay>
    <InplaceContent>
        <InputText />
    </InplaceContent>
</Inplace>

`}
</CodeHighlight>

                <p>In uncontrolled mode, no additional properties are required. Initial state can be still be provided using the <i>active</i> property in uncontrolled mode however
                it is evaluated at initial rendering and ignored in further updates. If you programmatically need to update the active state, prefer to use the component as controlled.</p>

<CodeHighlight className="language-jsx">
{`
<Inplace>
    <InplaceDisplay>
        Click to Edit
    </InplaceDisplay>
    <InplaceContent>
        <InputText autoFocus />
    </InplaceContent>
</Inplace>

`}
</CodeHighlight>

            <h3>Closable</h3>
            <p><i>closable</i> property is handy within forms as it enables to get back to output mode after editing is completed using a button displayed next to the form field.</p>
            <CodeHighlight className="language-jsx">
{`
<Inplace closable={true}>
    <InplaceDisplay>
        Click to Edit
    </InplaceDisplay>
    <InplaceContent>
        <InputText autoFocus />
    </InplaceContent>
</Inplace>

`}
</CodeHighlight>

            <h3>Lazy Loading</h3>
            <p>Inplace allows lazy loading content so that the content gets initialized after getting opened instead of on load. Here is an example that loads, data of a table
                if the user decides to open the inplace.
            </p>
            <CodeHighlight className="language-javascript">
{`
import React, {Component} from 'react';
import {Inplace,InplaceDisplay,InplaceContent} from '../../components/inplace/Inplace';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {CarService} from '../service/CarService';

export class InplaceDemo extends Component {

    constructor() {
        super();
        this.state = {
            cars: []
        };
        this.carservice = new CarService();

        this.onOpen = this.onOpen.bind(this);
    }

    onOpen() {
        this.carservice.getCarsSmall().then(data => this.setState({cars: data}));
    }

    render() {
        return (
            <Inplace onOpen={this.onOpen}>
                <InplaceDisplay>
                    View Data
                </InplaceDisplay>
                <InplaceContent>
                    <DataTable value={this.state.cars}>
                        <Column field="vin" header="Vin" />
                        <Column field="year" header="Year" />
                        <Column field="brand" header="Brand" />
                        <Column field="color" header="Color" />
                    </DataTable>
                </InplaceContent>
            </Inplace>
        )
    }
}

`}
</CodeHighlight>

            <h3>Properties</h3>
            <div className="doc-tablewrapper">
                <table className="doc-table">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Default</th>
                        <th>Description</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>style</td>
                            <td>object</td>
                            <td>null</td>
                            <td>Inline style of the element.</td>
                        </tr>
                        <tr>
                            <td>className</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Style class of the element.</td>
                        </tr>
                        <tr>
                            <td>active</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Whether the content is displayed or not.</td>
                        </tr>
                        <tr>
                            <td>closable</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Displays a button to switch back to display mode.</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>When present, it specifies that the element should be disabled.</td>
                        </tr>
                        <tr>
                            <td>tabIndex</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Index of the element in tabbing order.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Events</h3>
            <div className="doc-tablewrapper">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Parameters</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>onOpen</td>
                            <td>event: browser event </td>
                            <td>Callback to invoke when inplace is opened.</td>
                        </tr>
                        <tr>
                            <td>onClose</td>
                            <td>event: browser event </td>
                            <td>Callback to invoke when inplace is closed.</td>
                        </tr>
                        <tr>
                            <td>onToggle</td>
                            <td>event.originalEvent: browser event <br />
                                event.value: active state as a boolean
                            </td>
                            <td>Callback to invoke when inplace is opened or closed.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Styling</h3>
            <p>Following is the list of structural style classes, for theming classes visit <Link to="/theming"> theming</Link> page.</p>
            <div className="doc-tablewrapper">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Element</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>p-inplace</td>
                            <td>Container element</td>
                        </tr>
                        <tr>
                            <td>p-inplace-display</td>
                            <td>Display container</td>
                        </tr>
                        <tr>
                            <td>p-inplace-content</td>
                            <td>Content container</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Dependencies</h3>
                <p>None.</p>
            </div>

            </TabPanel>

                    {
                        this.sources && Object.entries(this.sources).map(([key, value], index) => {
                            return (
                                <TabPanel key={`source_${index}`} header={value.tabName}>
                                    {sourceButtons}

                                    <CodeHighlight className="language-javascript">
                                        {value.content}
                                    </CodeHighlight>
                                </TabPanel>
                            );
                        })
                    }
                </TabView>
            </div>
        );
    }
}

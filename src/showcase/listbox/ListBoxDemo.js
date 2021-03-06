import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {ListBox} from '../../components/listbox/ListBox';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';
import { LiveEditor } from '../liveeditor/LiveEditor';

export class ListBoxDemo extends Component {

    constructor() {
        super();
        this.state = {
            selectedCity: null,
            selectedCities: null,
            selectedCar: 'BMW'
        };
    }

    carTemplate(option) {
        const logoPath = 'showcase/demo/images/car/' + option.label + '.png';

        return (
            <div className="p-clearfix">
                <img alt={option.label} src={logoPath} style={{display:'inline-block',margin:'5px 0 0 5px',width:48}} />
                <span style={{fontSize:'1em',float:'right',margin:'1em .5em 0 0'}}>{option.label}</span>
            </div>
        );
    }

    render() {
        const cities = [
            {name: 'New York', code: 'NY'},
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Paris', code: 'PRS'}
        ];

        const cars = [
            {label: 'Audi', value: 'Audi'},
            {label: 'BMW', value: 'BMW'},
            {label: 'Fiat', value: 'Fiat'},
            {label: 'Honda', value: 'Honda'},
            {label: 'Jaguar', value: 'Jaguar'},
            {label: 'Mercedes', value: 'Mercedes'},
            {label: 'Renault', value: 'Renault'},
            {label: 'VW', value: 'VW'},
            {label: 'Volvo', value: 'Volvo'}
        ];

        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>ListBox</h1>
                        <p>ListBox is used to select one or more values from a list of items.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("listBox")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3 className="first">Single</h3>
                    <ListBox value={this.state.selectedCity} options={cities} onChange={(e) => this.setState({selectedCity: e.value})} optionLabel="name"/>

                    <h3>Multiple</h3>
                    <ListBox value={this.state.selectedCities} options={cities} onChange={(e) => this.setState({selectedCities: e.value})} multiple={true} optionLabel="name"/>

                    <h3>Advanced</h3>
                    <ListBox value={this.state.selectedCar} filter={true} filterPlaceholder="Search" options={cars} onChange={(e) => this.setState({selectedCar: e.value})} itemTemplate={this.carTemplate}
                                    style={{width: '15em'}} listStyle={{maxHeight: '250px'}}  />
                </div>

                <ListboxDoc></ListboxDoc>
            </div>
        );
    }
}

class ListboxDoc extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0
        };

        this.sources = {
            'app': {
                tabName: 'Source',
                content: `
import React, {Component} from 'react';
import {ListBox} from 'primereact/listbox';

export class ListBoxDemo extends Component {

    constructor() {
        super();
        this.state = {
            selectedCity: null,
            selectedCities: null,
            selectedCar: 'BMW'
        };
    }

    carTemplate(option) {
        const logoPath = 'showcase/demo/images/car/' + option.label + '.png';

        return (
            <div className="p-clearfix">
                <img alt={option.label} src={logoPath} srcSet="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" style={{display:'inline-block',margin:'5px 0 0 5px',width:48}} />
                <span style={{fontSize:'1em',float:'right',margin:'1em .5em 0 0'}}>{option.label}</span>
            </div>
        );
    }

    render() {
        const cities = [
            {name: 'New York', code: 'NY'},
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Paris', code: 'PRS'}
        ];

        const cars = [
            {label: 'Audi', value: 'Audi'},
            {label: 'BMW', value: 'BMW'},
            {label: 'Fiat', value: 'Fiat'},
            {label: 'Honda', value: 'Honda'},
            {label: 'Jaguar', value: 'Jaguar'},
            {label: 'Mercedes', value: 'Mercedes'},
            {label: 'Renault', value: 'Renault'},
            {label: 'VW', value: 'VW'},
            {label: 'Volvo', value: 'Volvo'}
        ];

        return (
            <div>
                <h3 className="first">Single</h3>
                <ListBox value={this.state.selectedCity} options={cities} onChange={(e) => this.setState({selectedCity: e.value})} optionLabel="name"/>

                <h3>Multiple</h3>
                <ListBox value={this.state.selectedCities} options={cities} onChange={(e) => this.setState({selectedCities: e.value})} multiple={true} optionLabel="name"/>

                <h3>Advanced</h3>
                <ListBox value={this.state.selectedCar} filter={true} filterPlaceholder="Search" options={cars} onChange={(e) => this.setState({selectedCar: e.value})} itemTemplate={this.carTemplate}
                                style={{width: '15em'}} listStyle={{maxHeight: '250px'}}  />
            </div>
        );
    }
}
                `
            },
            'hooks': {
                tabName: 'Hooks Source',
                content: `
import React, {useState} from 'react';
import {ListBox} from 'primereact/listbox';

const ListBoxDemo = () => {
    const [selectedCity, setSelectedCity] = useState(null);
    const [selectedCities, setSelectedCities] = useState(null);
    const [selectedCar, setSelectedCar] = useState('BMW');

    const carTemplate = (option) => {
        const logoPath = 'showcase/demo/images/car/' + option.label + '.png';

        return (
            <div className="p-clearfix">
                <img alt={option.label} src={logoPath} srcSet="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" style={{display:'inline-block',margin:'5px 0 0 5px',width:48}} />
                <span style={{fontSize:'1em',float:'right',margin:'1em .5em 0 0'}}>{option.label}</span>
            </div>
        );
    }

    const cities = [
        {name: 'New York', code: 'NY'},
        {name: 'Rome', code: 'RM'},
        {name: 'London', code: 'LDN'},
        {name: 'Istanbul', code: 'IST'},
        {name: 'Paris', code: 'PRS'}
    ];

    const cars = [
        {label: 'Audi', value: 'Audi'},
        {label: 'BMW', value: 'BMW'},
        {label: 'Fiat', value: 'Fiat'},
        {label: 'Honda', value: 'Honda'},
        {label: 'Jaguar', value: 'Jaguar'},
        {label: 'Mercedes', value: 'Mercedes'},
        {label: 'Renault', value: 'Renault'},
        {label: 'VW', value: 'VW'},
        {label: 'Volvo', value: 'Volvo'}
    ];

    return (
        <div>
            <h3 className="first">Single</h3>
            <ListBox value={selectedCity} options={cities} onChange={(e) => setSelectedCity(e.value)} optionLabel="name"/>

            <h3>Multiple</h3>
            <ListBox value={selectedCities} options={cities} onChange={(e) => setSelectedCities(e.value)} multiple={true} optionLabel="name"/>

            <h3>Advanced</h3>
            <ListBox value={selectedCar} filter={true} filterPlaceholder="Search" options={cars} onChange={(e) => setSelectedCar(e.value)} itemTemplate={carTemplate}
                            style={{width: '15em'}} listStyle={{maxHeight: '250px'}}  />
        </div>
    );
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React, {useState} from 'react';
import {ListBox} from 'primereact/listbox';

const ListBoxDemo = () => {
    const [selectedCity, setSelectedCity] = useState<string|undefined>(undefined);
    const [selectedCities, setSelectedCities] = useState<any[]|undefined>(undefined);
    const [selectedCar, setSelectedCar] = useState('BMW');

    const carTemplate = (option: { label: string }) => {
        const logoPath = 'showcase/demo/images/car/' + option.label + '.png';

        return (
            <div className="p-clearfix">
                <img alt={option.label} src={logoPath} srcSet="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" style={{display:'inline-block',margin:'5px 0 0 5px',width:48}} />
                <span style={{fontSize:'1em',float:'right',margin:'1em .5em 0 0'}}>{option.label}</span>
            </div>
        );
    }

    const cities = [
        {name: 'New York', code: 'NY'},
        {name: 'Rome', code: 'RM'},
        {name: 'London', code: 'LDN'},
        {name: 'Istanbul', code: 'IST'},
        {name: 'Paris', code: 'PRS'}
    ];

    const cars = [
        {label: 'Audi', value: 'Audi'},
        {label: 'BMW', value: 'BMW'},
        {label: 'Fiat', value: 'Fiat'},
        {label: 'Honda', value: 'Honda'},
        {label: 'Jaguar', value: 'Jaguar'},
        {label: 'Mercedes', value: 'Mercedes'},
        {label: 'Renault', value: 'Renault'},
        {label: 'VW', value: 'VW'},
        {label: 'Volvo', value: 'Volvo'}
    ];

    return (
        <div>
            <h3 className="first">Single</h3>
            <ListBox value={selectedCity} options={cities} onChange={(e) => setSelectedCity(e.value)} optionLabel="name"/>

            <h3>Multiple</h3>
            <ListBox value={selectedCities} options={cities} onChange={(e) => setSelectedCities(e.value)} multiple={true} optionLabel="name"/>

            <h3>Advanced</h3>
            <ListBox value={selectedCar} filter={true} filterPlaceholder="Search" options={cars} onChange={(e) => setSelectedCar(e.value)} itemTemplate={carTemplate}
                            style={{width: '15em'}} listStyle={{maxHeight: '250px'}}  />
        </div>
    );
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
                <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/listbox" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    <span>View on GitHub</span>
                </a>
                <LiveEditor name="ListBoxDemo" sources={this.sources} service="NodeService" data="treenodes" activeButtonIndex={this.state.activeIndex - 1} />
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
import {ListBox} from 'primereact/listbox';

`}
</CodeHighlight>

            <h3>Getting Started</h3>
            <p>Listbox is used as a controlled component with <i>value</i> and <i>onChange</i> properties along with the options collection. There are two alternatives
                of how to define the options property; One way is providing a collection of <i>SelectItem</i> instances having label-value pairs
                whereas other way is providing an array of arbitrary objects along with the <i>optionLabel</i> and <i>optionValue</i> properties to specify the label/value field pair.
                In addition, options can be simple primitive values such as a string array, in this case no optionLabel or optionValue is necessary.</p>

            <p><b>Options as SelectItems</b></p>
            <CodeHighlight className="language-javascript">
{`
const citySelectItems = [
    {label: 'New York', value: 'NY'},
    {label: 'Rome', value: 'RM'},
    {label: 'London', value: 'LDN'},
    {label: 'Istanbul', value: 'IST'},
    {label: 'Paris', value: 'PRS'}
];

`}
            </CodeHighlight>

            <CodeHighlight className="language-jsx">
{`
<Listbox value={this.state.city} options={citySelectItems} onChange={(e) => this.setState({city: e.value})} />

`}
            </CodeHighlight>

            <p><b>Options as any type</b></p>
            <CodeHighlight className="language-javascript">
{`
const cities = [
    {name: 'New York', code: 'NY'},
    {name: 'Rome', code: 'RM'},
    {name: 'London', code: 'LDN'},
    {name: 'Istanbul', code: 'IST'},
    {name: 'Paris', code: 'PRS'}
];

`}
            </CodeHighlight>

            <CodeHighlight className="language-jsx">
{`
<Listbox optionLabel="name" value={this.state.city} options={cities} onChange={(e) => this.setState({city: e.value})} />
<Listbox optionLabel="name" optionValue="code" value={this.state.city} options={cities} onChange={(e) => this.setState({city: e.value})} />


`}
            </CodeHighlight>
            <p>When <i>optionValue</i> is not defined, value of an option refers to the option object itself.</p>

            <h3>Selection</h3>
            <p>Listbox allows selection of either single or multiple items. In single case, model should be a single object reference whereas in multiple case should be an array. Multiple items can either be selected
                using metaKey or toggled individually depending on the value of <i>metaKeySelection</i> property value which is true by default. On touch enabled
                devices metaKeySelection is turned off automatically.</p>

<CodeHighlight className="language-jsx">
{`
<Listbox value={this.state.cities} options={cities} onChange={(e) => this.setState({city: e.value})} multiple={true}/>

`}
</CodeHighlight>

            <h3>Custom Content</h3>
            <p>Label of an option is used as the display text of an item by default, for custom content support define an itemTemplate function that gets the option as a parameter and returns the content.</p>

<CodeHighlight className="language-jsx">
{`
<Listbox value={this.state.city} options={cities} onChange={(e) => this.setState({city: e.value})} itemTemplate={this.carTemplate} />

`}
</CodeHighlight>

<CodeHighlight className="language-javascript">
{`
carTemplate(option) {
    const logoPath = 'showcase/demo/images/car/' + option.label + '.png';

    return (
        <div className="p-clearfix">
            <img alt={option.label} src={logoPath} style={{display:'inline-block',margin:'5px 0 0 5px'}} />
            <span style={{fontSize:'1em',float:'right',margin:'1em .5em 0 0'}}>{option.label}</span>
        </div>
    );
}

`}
</CodeHighlight>
            <h3>Filtering</h3>
            <p>Options can be filtered using an input field in the overlay by enabling the <i>filter</i> property. By default filtering is done against
            label of the items and <i>filterBy</i> property is available to choose one or more properties of the options. In addition <i>filterMatchMode</i> can be utilized
            to define the filtering algorithm, valid options are "contains" (default), "startsWith", "endsWith", "equals" and "notEquals".</p>

<CodeHighlight className="language-jsx">
{`
<Listbox value={this.state.city} options={cities} onChange={(e) => this.setState({city: e.value})} filter={true} />

`}
</CodeHighlight>

            <h3>SelectItem API</h3>
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
                            <td>label</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Label of the option.</td>
                        </tr>
                        <tr>
                            <td>value</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Value of the option.</td>
                        </tr>
                        <tr>
                            <td>className</td>
                            <td>string</td>
                            <td>null</td>
                            <td>ClassName of the option.</td>
                        </tr>
                        <tr>
                            <td>title</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Tooltip text of the option. (Not supported)</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Whether the option is disabled or not. (Not supported)</td>
                        </tr>
                    </tbody>
                </table>
            </div>

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
                            <td>id</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Unique identifier of the element.</td>
                        </tr>
                        <tr>
                            <td>value</td>
                            <td>object</td>
                            <td>null</td>
                            <td>Selected value to display.</td>
                        </tr>
                         <tr>
                            <td>options</td>
                            <td>array</td>
                            <td>null</td>
                            <td>An array of objects to display as the available options.</td>
                        </tr>
                        <tr>
                            <td>optionLabel</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Name of the label field of an option when an arbitrary objects instead of SelectItems are used as options.</td>
                        </tr>
                        <tr>
                            <td>optionValue</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Name of the value field of an option when arbitrary objects are used as options instead of SelectItems.</td>
                        </tr>
                        <tr>
                            <td>itemTemplate</td>
                            <td>function</td>
                            <td>null</td>
                            <td>Function that gets the option and returns the content for it.</td>
                        </tr>
                        <tr>
                            <td>style</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Inline style of the element.</td>
                        </tr>
                        <tr>
                            <td>listStyle</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Inline style of inner list element.</td>
                        </tr>
                        <tr>
                            <td>className</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Style class of the element.</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>When specified, disables the component.</td>
                        </tr>
                        <tr>
                            <td>dataKey</td>
                            <td>string</td>
                            <td>false</td>
                            <td>A property to uniquely match the value in options for better performance.</td>
                        </tr>
                        <tr>
                            <td>multiple</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>When specified, allows selecting multiple values.</td>
                        </tr>
                        <tr>
                            <td>metaKeySelection</td>
                            <td>boolean</td>
                            <td>true</td>
                            <td>Defines how multiple items can be selected, when true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item
                            can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically.</td>
                        </tr>
                        <tr>
                            <td>filter</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>When specified, displays a filter input at header.</td>
                        </tr>
                        <tr>
                            <td>filterBy</td>
                            <td>string</td>
                            <td>label</td>
                            <td>When filtering is enabled, filterBy decides which field or fields (comma separated) to search against.</td>
                        </tr>
                        <tr>
                            <td>filterMatchMode</td>
                            <td>string</td>
                            <td>contains</td>
                            <td>Defines how the items are filtered, valid values are "contains" (default), "startsWith", "endsWith", "equals" and "notEquals".</td>
                        </tr>
                        <tr>
                            <td>filterPlaceholder</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Placeholder text to show when filter input is empty.</td>
                        </tr>
                        <tr>
                            <td>filterLocale</td>
                            <td>string</td>
                            <td>undefined</td>
                            <td>Locale to use in filtering. The default locale is the host environment's current locale.</td>
                        </tr>
                        <tr>
                            <td>tabIndex</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Index of the element in tabbing order.</td>
                        </tr>
                        <tr>
                            <td>tooltip</td>
                            <td>any</td>
                            <td>null</td>
                            <td>Content of the tooltip.</td>
                        </tr>
                        <tr>
                            <td>tooltipOptions</td>
                            <td>object</td>
                            <td>null</td>
                            <td>Configuration of the tooltip, refer to the tooltip documentation for more information.</td>
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
                            <td>onChange</td>
                            <td>event.originalEvent: Browser event <br/>
                                event.value: Single value or an array of values depending on the selection mode <br/>
                            </td>
                            <td>Callback to invoke when value of listbox changes.</td>
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
                            <td>p-listbox</td>
                            <td>Main container element.</td>
                        </tr>
                        <tr>
                            <td>p-listbox-header</td>
                            <td>Header element.</td>
                        </tr>
                        <tr>
                            <td>p-listbox-list-wrapper</td>
                            <td>Container of list element.</td>
                        </tr>
                        <tr>
                            <td>p-listbox-list</td>
                            <td>List element.</td>
                        </tr>
                        <tr>
                            <td>p-listbox-item</td>
                            <td>An item in the list element.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Dependencies</h3>
            <p>None.</p>
        </TabPanel>

        {
            this.sources && Object.entries(this.sources).map(([key, value], index) => {
                const header = key === 'app' ? 'Source' : `${key} Source`;
                return (
                    <TabPanel key={`source_${index}`} header={header}>
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

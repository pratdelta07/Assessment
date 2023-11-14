import React from "react";
import axios from "axios";
class Jsoncomponent extends React.Component {
    state = {
        persons: []
    }
    componentDidMount() {
        axios.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
            .then(res => {
                const datausa = res.data;
                console.log(this.state.datausa);
                this.setState({ persons: datausa.data});
            })
    }
    render() {
        return (
            <table border={2}>
                <thead>
                    <tr>
                        <th>Id_nation</th>
                        <th>Population</th>
                        <th>year</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.persons.map(person =>
                            <tr key={person.Nation}>
                                <td>{person.IDNation}</td>
                                <td>{person.Population}</td>
                                <td>{person.Year}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        )
    }
}
export default Jsoncomponent;
import React, { Component } from 'react';
import OnboardQ1 from './onboardQ1';
import OnboardQ2 from './onboardQ2';
import OnboardQ3 from './onboardQ3';
import roomService from '../../services/roomServices';
import styleServices from '../../services/styleServices';
import roomServices from '../../services/roomServices';



class Onboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rooms: [],
            filterRoom: [],
            styles: [],
            errors: {},
            boardNo: 1,
            checkBoxes: []
        }
    }

    componentDidMount() {
        this.getRooms();
    }

    getRooms = async () => {
        try {
            const { data } = await roomService.getAllRooms();
            this.setState({ rooms: data.results });
        } catch (ex) {
            const errors = this.state.errors;
            errors['rooms'] = "Failed to fetch get all rooms";
            this.setState({ errors });
        }
    }


    submitCheckbox = async (e) => {
        e.preventDefault();
        const { checkBoxes, errors } = this.state;

        if (checkBoxes.length === 0) {
            errors['checkbox'] = "Please! select at least one item.";
            this.setState({ errors });
        } else {
            try {
                const { data } = await styleServices.getAllStyle();
                this.setState({ styles: data.results, boardNo: 2 });
            } catch (ex) {
                const errors = this.state.errors;
                errors['style'] = 'Failed to get styles';
                this.setState({ errors });
            }
        }
    };

    submitStyle = async (e) => {
        e.preventDefault();
        const { checkBoxes, errors } = this.state;

        try {
            const { data } = await roomServices.getRoomsByIds(checkBoxes.join(','));
            this.setState({ filterRoom: data.results, boardNo: 3 });
        } catch (ex) {
            errors['style'] = 'Failed to get styles';
            this.setState({ errors });
        }
    };

    onCheck = (e) => {
        const id = e.target.id;
        const { checkBoxes, errors } = this.state;
        const idx = checkBoxes.indexOf(id);
        if (idx > -1) {
            checkBoxes.splice(idx, 1);
        } else {
            checkBoxes.push(id)
        }
        errors['checkbox'] = null
        this.setState({ checkBoxes, errors });
    }

    openBoard = (no) => {
        this.setState({ boardNo: no, checkBoxes: [] })
    }

    render() {
        const { rooms, boardNo, filterRoom, errors, styles } = this.state;

        return (
            <>
                {boardNo === 1 && <OnboardQ1 errors={errors} onCheck={this.onCheck} rooms={rooms} submitCheckbox={this.submitCheckbox} />}
                {boardNo === 2 && <OnboardQ2 {...this.props} openBoard={this.openBoard} styles={styles} submitStyle={this.submitStyle} />}
                {boardNo === 3 && <OnboardQ3  {...this.props} openBoard={this.openBoard} filterRoom={filterRoom.slice(0, 12)} onClick={this.handelClick} />}
            </>
        );
    }
}

export default Onboard;
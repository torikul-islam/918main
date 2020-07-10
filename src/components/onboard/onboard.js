import React, { Component } from 'react';
import OnboardQ1 from './onboardQ1';
import Modal from '../common/modal/modal';
import OnboardQ2 from './onboardQ2';
import OnboardQ3 from './onboardQ3';
import roomService from '../../services/roomServices';
import styleService from '../../services/styleServices';
import styleServices from '../../services/styleServices';
import roomServices from '../../services/roomServices';




class Onboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rooms: [
                {
                    "pk": 1,
                    "uuid": "d413110d-1ba7-4d4a-b7ee-5b9020902072",
                    "name": "Living Room"
                },
                {
                    "pk": 2,
                    "uuid": "24396beb-2870-4242-8818-56a20b6b1f74",
                    "name": "Dining Room"
                },
                {
                    "pk": 3,
                    "uuid": "2bbf7197-7d00-40e4-b307-a55bf86cca1b",
                    "name": "Kitchen"
                },
                {
                    "pk": 4,
                    "uuid": "d190766e-f555-4939-929c-d02b70b7eefe",
                    "name": "Bathroom"
                },
                {
                    "pk": 5,
                    "uuid": "0239a55d-0263-4a23-b17c-f2be30022d99",
                    "name": "Bedroom"
                },
                {
                    "pk": 6,
                    "uuid": "3c3e8f05-ef89-42f9-afc9-511f8e019c7f",
                    "name": "Office"
                },
                {
                    "pk": 7,
                    "uuid": "a9b9168f-13ee-4030-b452-445f9242cf40",
                    "name": "Kids' Room"
                },
                {
                    "pk": 8,
                    "uuid": "efec1400-2543-496b-840b-22af91ac069a",
                    "name": "Entryway"
                },
                {
                    "pk": 9,
                    "uuid": "a3c5dc23-17f9-4f1c-ae6b-702636089a3c",
                    "name": "Outdoor"
                }
            ],
            filterRoom: [],
            styles: [],
            errors: {},
            boardNo: 1,
            checkBoxes: []
        }
    }

    componentDidMount() {
        // this.getRooms();
    }

    getRooms = async () => {
        try {
            const { data: rooms } = await roomService.getAllRooms();
            this.setState({ rooms });
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
            const errors = this.state.errors;
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

    render() {
        const { rooms, boardNo, filterRoom, errors, styles } = this.state;

        return (
            <>
                {boardNo === 1 && <OnboardQ1 errors={errors} onCheck={this.onCheck} rooms={rooms} submitCheckbox={this.submitCheckbox} />}
                {boardNo === 2 && <OnboardQ2 styles={styles} submitStyle={this.submitStyle} />}
                {boardNo === 3 && <OnboardQ3  {...this.props} filterRoom={filterRoom.slice(0, 12)} onClick={this.handelClick} />}
            </>
        );
    }
}

export default Onboard;
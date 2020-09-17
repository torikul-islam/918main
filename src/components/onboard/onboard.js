import React, { Component } from 'react';
import OnboardQ1 from './onboardQ1';
import OnboardQ2 from './onboardQ2';
import OnboardQ3 from './onboardQ3';
import roomService from '../../services/roomServices';
import styleServices from '../../services/styleServices';
import piecesService from '../../services/piecesService';




class Onboard extends Component {
    constructor(props) {
        super();
        this.state = {
            rooms: [],
            styleIds: [],
            filterRoom: [],
            selectedPieces: [],
            styles: [],
            errors: {},
            boardNo: 1,
            checkBoxes: []
        }
    }

    async componentDidMount() {
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
        const { checkBoxes, errors, styleIds } = this.state;
        if (styleIds.length === 0) {
            errors['styles'] = 'Please! select at least one image.'
            this.setState({ errors: errors });
            return;
        } else {
            errors['styles'] = null;
        }

        try {
            const { data } = await piecesService.getAllPieces();
            const filterPieces = data.results.filter(x => checkBoxes.some(c => x.piece_category.id === Number(c)))
            this.setState({ filterRoom: filterPieces, boardNo: 3 });
        } catch (ex) {
            errors['style'] = 'Failed to get styles';
            this.setState({ errors });
        }
    };

    onCheck = (e) => {
        const id = e.target.id;
        const { checkBoxes, errors } = this.state;
        const idx = checkBoxes.find(c => c === Number(id));
        if (!idx && checkBoxes.length === 0) {
            checkBoxes.push(id)
        } else if (checkBoxes[0] == id) {
            checkBoxes.pop()
        }
        errors['checkbox'] = null
        this.setState({ checkBoxes, errors });
    }

    openBoard = (no) => {
        this.setState({ boardNo: no });
    }

    clickImage = (item) => {
        const errors = { ...this.state.errors };
        errors['styles'] = null;
        let ids = [...this.state.styleIds];
        let index = ids.findIndex(x => x === item.pk);

        if (index === -1) {
            if (ids.length <= 2) {
                ids.push(item.pk);
            }
        } else {
            ids = ids.filter(x => x !== item.pk);
        }
        this.setState({ styleIds: ids, errors: errors });
    }

    clickPieces = (item) => {
        let ids = [...this.state.selectedPieces];
        const index = ids.findIndex(x => x === item.pk);
        if (index === -1) {
            ids.push(item.pk);
        } else {
            ids = ids.filter(x => x !== item.pk)
        }
        this.setState({ selectedPieces: ids });
    }

    render() {
        const { rooms, boardNo, filterRoom, errors, styles, styleIds, selectedPieces, checkBoxes } = this.state;

        return (
            <>
                {boardNo === 1 && <OnboardQ1 errors={errors} onCheck={this.onCheck} rooms={rooms} checkBoxes={checkBoxes} submitCheckbox={this.submitCheckbox} />}
                {boardNo === 2 && <OnboardQ2 {...this.props} errors={errors} selectedImage={styleIds} clickImage={this.clickImage} openBoard={this.openBoard} styles={styles} submitStyle={this.submitStyle} />}
                {boardNo === 3 && <OnboardQ3  {...this.props} clickPieces={this.clickPieces} selectedPieces={selectedPieces} openBoard={this.openBoard} filterRoom={filterRoom.slice(0, 12)} onClick={this.handelClick} />}

            </>
        );
    }
}

export default Onboard;
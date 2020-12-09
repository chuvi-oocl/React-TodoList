import {connect} from 'react-redux';
import DoneList from '../Components/DoneList';

const mapStateToProps = state => ({
    doneList: state.todoList.filter(todo => todo.done)
});

const DoneListContainer = connect(mapStateToProps)(DoneList);

export default DoneListContainer;
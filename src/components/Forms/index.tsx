import Button from "../Button";
import "./style.scss";

function Forms() {
  return (
    <form className='newTask'>
      <div className='inputContainer'>
        <label htmlFor='task'>Adicione uma nova tarefa:</label>
        <input
          type='text'
          name='task'
          id='task'
          placeholder='O que você quer fazer?'
          required
        />
      </div>
      <div className='inputContainer'>
        <label htmlFor='time'>Tempo:</label>
        <input
          type='time'
          step='1'
          name='time'
          id='time'
          min='00:00:00'
          max='01:30:00'
          required
        />
      </div>
      <Button />
    </form>
  );
}

export default Forms;

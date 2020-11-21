import React, {useState} from "react";
import ReactDOM from "react-dom";
import * as Types from "./Types";

//#region Types


interface TWizardState extends Types.StepState
{
    Step: number;
}

//#endregion

class Wizard extends React.Component<any, TWizardState>{
    constructor(props) {
        super(props);
        this.nextStep = this.nextStep.bind(this);
        this.prevStep = this.prevStep.bind(this);
        this.state = {
            Title: "Step Title",
            Info : {
                Header : "Step Info Header",
                Text : "Step Text"
            },
            Nav : {
                ShowNext: true,
                ShowSp: true,
                ShowPrev: true,
                ShowDone:true
            },
            Step : 1
        }
        
      }
    
    nextStep()
    {
        this.setState({Step : this.state.Step + 1});
        this.setstep(this.state.Step)
    }
    
    prevStep()
    {
         this.setState({Step : this.state.Step - 1});
    }

    doneStep()
    {
        alert("Done");
    }

    setstep(step: number)
    {

    }

    render(){
    
        return(
            <div className="wrapper wizard_wrapper">
                 <div className="container wizard_container">
                    {/* Wizard Step */}
                    <div id={this.props.Id} className = "wrapper wizard_step_wrapper">                    
                        <div id={this.props.Id} className = "wrapper wizard_step_container">

                            {/* Wizard Step Title */}
                            <div id={this.props.Id} className = "wrapper wizard_step_title_wrapper">
                                <div className = "container wizard_step_title_container">
                                    <h2 className = "element wizard_step_title">
                                        {this.state.Title}
                                    </h2>
                                </div>
                            </div>
                            {/* End Wizard Step Title */}  

                            {/* Wizard Step Info */}            
                            <div id={this.props.Id} className = "wrapper wizard_step_info_wrapper">
                                <div id={this.props.Id} className = "wrapper wizard_step_info_wrapper">
                                    <div className = "container wizard_step_info_container">
                                        <h2 className = "element wizard_info_header">
                                            {this.state.Info.Header}
                                        </h2>
                                        <p className="element wizard_step_info_p">
                                            {this.state.Info.Text}                    
                                        </p>
                                    </div>
                                </div>        
                            </div>  
                            {/* End Wizard Step Info */}  

                            {/* Wizard Step Content */}  
                            <div id={this.props.Id} className = "wrapper wizard_step_content_wrapper">
                                <div className = "container wizard_step_content_container">
                            
                                </div>
                            </div>      
                            {/* End Wizard Step Content */}  

                            {/* Wizard Step Navigation */}
                            <div className="wrapper wizard_step_navigation_wrapper">
                                <div className="container wizard_step_navigation_container">
                                    <div id={this.props.Id}>
                                        {this.state.Nav.ShowPrev && 
                                            <button id="wizard_step_nav_prev" className="wizard_step_nav" onClick={this.nextStep}>
                                                <i className="fas fa-arrow-left"></i>&nbsp;Prev
                                            </button>
                                        };
                                        {this.state.Nav.ShowSp &&
                                            <span>&nbsp;&nbsp;<i className="fas fa-grip-lines-vertical"></i>&nbsp;&nbsp</span>
                                        };
                                        {this.state.Nav.ShowNext &&
                                            <button id="wizard_step_nav_next" className="wizard_step_nav" onClick={this.prevStep}> 
                                                Next&nbsp;<i className="fas fa-arrow-right"></i>
                                            </button>
                                        };
                                        {this.state.Nav.ShowDone &&
                                            <button id="wizard_step_nav_done" className="wizard_step_nav_done" onClick={this.doneStep}>
                                                <i className="fas fa-check-circle"></i>&nbsp;Done
                                            </button>
                                        };

                                    </div>            
                                </div>
                            </div>
                            {/* End Wizard Step Navigation */} 
                            
                        </div>                                      
                    </div>
                    {/* End Wizard Step */}  
                </div>
            </div>
        )
    };

}

// #region WizardStep



// #endregion


ReactDOM.render(<Wizard />, document.querySelector('#root'));
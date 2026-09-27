import { Component } from 'react'

import { Section } from './components/Section'
import { FeedbackOptions } from './components/FeedbackOptions'
import { Statistics } from './components/Statistics'
import { NotificationMessage } from './components/NotificationMessage'

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }
 countTotal = () => {
    return Object.values(this.state).reduce((sum, value) => {
      return sum + value
    }, 0)
 }
  
  feedback = (option) => {
    this.setState((prevState) => ({
      [option]: prevState[option] + 1,
    }))
  }

 

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotal()

    if (total === 0) {
      return 0
    }

    return (this.state.good / total) * 100
  }

  render() {
    const { good, neutral, bad } = this.state

    return (
      <Section title="Please leave us feedback">
        <FeedbackOptions onLeaveFeedback={this.feedback} />
        {this.countTotal() === 0 ? <NotificationMessage message="There is no feedback"/> : <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotal()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />}
        
      </Section>
    )
  }
}

export default App
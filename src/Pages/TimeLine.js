import React  from 'react';
import '../css/timeline.css';

export const TimeLine = () => {
    return (
      <>
        <div class="containers">
        <div class="timeline">
		<div class="timeline-row">
			<div class="timeline-time">
			<small>2020 - PRESENT</small>
			</div>
			<div class="timeline-content">
				<h4>University</h4>
				<p>Ho Chi Minh City University of Education</p>
				<br/>
                  Majors: Information Technology
			</div>
		</div>
		<div class="timeline-row">
			<div class="timeline-time">
			<small>2017 - 2020</small>
			</div>
			<div class="timeline-content">
				<h4>High School</h4>
				<p>
					Xuan Loc's School
				</p>
			</div>
		</div>

		<div class="timeline-row">
			<div class="timeline-time">
				<small>2013 - 2007</small>
			</div>
			<div class="timeline-content">
				<h4>Junior high school</h4>
				<p>Nguyen Dinh Chieu’s School</p>
			</div>
		</div>

		<div class="timeline-row">
			<div class="timeline-time">
				Project<small>9-10/2021</small>
			</div>
			<div class="timeline-content">
				<h4>Prim's & Dijkstra's algorithm visualization.</h4>
				<p><br/>
                       - Subject: Data Structure  <br/>
                       - Group: CTQM, 5 members <br/>
                       - Responsibilities: Interface design ideas, report content.<br/>
                       - Instructor: Mr. Nguyen Viet Hung – Mr. Luong Tran Ngoc Khiet
                </p>
			</div>
		</div>

		<div class="timeline-row">
			<div class="timeline-time">
				Project<small>9-10/2021</small>
			</div>
			<div class="timeline-content">
				<h4>Simulate how ATM works on C++ code.</h4>
				<p><br/>
                       - Subject: Applications of Graph Theory  <br/>
                       - Group: CTQM, 5 members <br/>
                       - Responsibilities: Interface design ideas, report content.<br/>
                       - Instructor: Mr. Luong Tran Ngoc Khiet
                </p>
			</div>
		</div>

		<div class="timeline-row">
			<div class="timeline-time">
				Project<small>9-10/2021</small>
			</div>
			<div class="timeline-content">
				<h4>Shoes store management app.</h4>
				<p>
				<br/>
                       - Subject: Winforms Application  <br/>
                       - Group: CTQM, 5 members <br/>
                       - Responsibilities: Interface design ideas, database contents, report content.<br/>
                       - Instructor: Mr. Le Hoang Viet Tuan
                </p>
				
			</div>
		</div>

		<div class="timeline-row">
			<div class="timeline-time">
				Project<small>3-4/2022</small>
			</div>
			<div class="timeline-content">
				<h4>Build an online learning website</h4>
				<p>
				<br/>
                       - Subject: Web application development <br/>
                       - Group: CTQM, 7 members <br/>
                       - Responsibilities: Front-end, Back-end,..<br/>
                       - Instructor: Mr. Le Hoang Viet Tuan
                </p>
				
			</div>
		</div>
	</div>
</div>
      </>
    )
};
export default TimeLine;
import React from "react";
import "./MultilevelDropDown.css";
import { FaPlusCircle } from "react-icons/fa";


type Props = {
  icon: any;
};

const GroupByDropDown = (props: Props) => {
  return (
    <div className="group inline-block hover:bg-black-rgba text-[#495057]">
      <button className="outline-none focus:outline-none px-3 py-1  rounded-sm flex items-center">
        <props.icon size={"0.75rem"} />
        <span className="pl-2 flex-1">Group By</span>
      </button>
      <ul
        className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out origin-top min-w-32"
      >
        <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
          Unread Messages
        </li>
        <div
          role="separator"
          className="h-0 my-2 overflow-hidden border-t-slate-300 border-t-[1px]"
        ></div>
        <li className="rounded-sm px-3 py-1 hover:bg-gray-100">My Team</li>
        <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
          My Department
        </li>
        <div
          role="separator"
          className="h-0 my-2 overflow-hidden border-t-slate-300 border-t-[1px]"
        ></div>
        <li className="rounded-sm px-3 py-1 hover:bg-gray-100">Archived</li>
        <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
          <button className="w-full text-left flex items-center outline-none focus:outline-none">
            <span className="pr-1 flex-1">Add Custom Filter</span>
            <span className="mr-auto">
              <svg
                className="fill-current h-4 w-4
            transition duration-150 ease-in-out"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </span>
          </button>
          <ul
            className="bg-white border rounded-sm absolute top-0 right-0 
  transition duration-150 ease-in-out origin-top-left
  min-w-32
  "
          >
            <li className="px-3 py-1 hover:bg-gray-100">
              <select name="group-fields" className="o_input o_generator_menu_field">
                <option value="message_needaction">Action Needed</option>
                <option value="active">Active</option>
                <option value="activity_ids">Activities</option>
                <option value="activity_exception_decoration">
                  Activity Exception Decoration
                </option>
                <option value="activity_state">Activity State</option>
                <option value="activity_type_icon">Activity Type Icon</option>
                <option value="departure_description">
                  Additional Information
                </option>
                <option value="additional_note">Additional Note</option>
                <option value="address_home_id">Address</option>
                <option value="barcode">Badge ID</option>
                <option value="bank_account_id">Bank Account Number</option>
                <option value="certificate">Certificate Level</option>
                <option value="coach_id">Coach</option>
                <option value="color">Color Index</option>
                <option value="company_id">Company</option>
                <option value="emergency_contact">Contact Name</option>
                <option value="emergency_phone">Contact Phone</option>
                <option value="company_country_code">Country Code</option>
                <option value="country_of_birth">Country of Birth</option>
                <option value="create_uid">Created by</option>
                <option value="create_date">Created on</option>
                <option value="currency_id">Currency</option>
                <option value="birthday">Date of Birth</option>
                <option value="department_id">Department</option>
                <option value="departure_date">Departure Date</option>
                <option value="departure_reason_id">Departure Reason</option>
                <option value="child_ids">Direct subordinates</option>
                <option value="driving_license">Driving License</option>
                <option value="name">Employee Name</option>
                <option value="employee_type">Employee Type</option>
                <option value="study_field">Field of Study</option>
                <option value="message_follower_ids">Followers</option>
                <option value="message_partner_ids">
                  Followers (Partners)
                </option>
                <option value="gender">Gender</option>
                <option value="has_message">Has Message</option>
                <option value="km_home_work">Home-Work Distance</option>
                <option value="id">ID</option>
                <option value="id_card">ID Card Copy</option>
                <option value="identification_id">Identification No</option>
                <option value="image_1920">Image</option>
                <option value="image_1024">Image 1024</option>
                <option value="image_128">Image 128</option>
                <option value="image_256">Image 256</option>
                <option value="image_512">Image 512</option>
                <option value="message_is_follower">Is Follower</option>
                <option value="job_id">Job Position</option>
                <option value="job_title">Job Title</option>
                <option value="lang">Lang</option>
                <option value="write_uid">Last Updated by</option>
                <option value="write_date">Last Updated on</option>
                <option value="message_main_attachment_id">
                  Main Attachment
                </option>
                <option value="parent_id">Manager</option>
                <option value="marital">Marital Status</option>
                <option value="member_of_department">
                  Member of department
                </option>
                <option value="message_has_error">
                  Message Delivery error
                </option>
                <option value="message_ids">Messages</option>
                <option value="my_activity_date_deadline">
                  My Activity Deadline
                </option>
                <option value="country_id">Nationality (Country)</option>
                <option value="activity_date_deadline">
                  Next Activity Deadline
                </option>
                <option value="activity_summary">Next Activity Summary</option>
                <option value="activity_type_id">Next Activity Type</option>
                <option value="notes">Notes</option>
                <option value="children">Number of Dependent Children</option>
                <option value="pin">PIN</option>
                <option value="passport_id">Passport No</option>
                <option value="place_of_birth">Place of Birth</option>
                <option value="private_email">Private Email</option>
                <option value="phone">Private Phone</option>
                <option value="resource_id">Resource</option>
                <option value="activity_user_id">Responsible User</option>
                <option value="sinid">SIN No</option>
                <option value="message_has_sms_error">
                  SMS Delivery error
                </option>
                <option value="ssnid">SSN No</option>
                <option value="study_school">School</option>
                <option value="spouse_birthdate">Spouse Birthdate</option>
                <option value="spouse_complete_name">
                  Spouse Complete Name
                </option>
                <option value="category_ids">Tags</option>
                <option value="tz">Timezone</option>
                <option value="user_id">User</option>
                <option value="user_partner_id">{"User's partner"}</option>
                <option value="visa_expire">Visa Expire Date</option>
                <option value="visa_no">Visa No</option>
                <option value="address_id">Work Address</option>
                <option value="work_contact_id">Work Contact</option>
                <option value="work_email">Work Email</option>
                <option value="work_location_id">Work Location</option>
                <option value="mobile_phone">Work Mobile</option>
                <option value="has_work_permit">Work Permit</option>
                <option value="work_permit_expiration_date">
                  Work Permit Expiration Date
                </option>
                <option value="permit_no">Work Permit No</option>
                <option value="work_permit_scheduled_activity">
                  Work Permit Scheduled Activity
                </option>
                <option value="work_phone">Work Phone</option>
                <option value="resource_calendar_id">Working Hours</option>
              </select>
            </li>
            <li className="px-3 py-1 hover:bg-gray-100">
              <select name="group-operators1" className="w-full">
                <option value="=">is</option>
                <option value="!=">is not</option>
                <option value="!=">is set</option>
                <option value="=">is not set</option>
              </select>
            </li>
            <li className="px-3 py-1 hover:bg-gray-100">
              <span className="w-full">
                <select name="group-operators2" className="w-full">
                  <option value="overdue">Overdue</option>
                  <option value="today">Today</option>
                  <option value="planned">Planned</option>
                </select>
              </span>
            </li>
            <li className="px-3 py-1 hover:bg-gray-100">
              <div className="px-3 py-2">
                <button
                  type="button"
                  className="bg-primary hover:bg-primary-hover text-white border-primary hover:border-primary-hover font-medium text-base border py-1 px-3 rounded me-2"
                >
                  {" "}
                  Apply{" "}
                </button>
                <button
                  type="button"
                  className="flex gap-1 bg-secondary hover:bg-[white] text-[#66598f] border-secondary hover:border-secondary-hover font-medium text-base border py-1 px-3 rounded"
                >
                  <FaPlusCircle />
                  Add a condition
                </button>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default GroupByDropDown;

/**
 * 
 */
package com.pan.project.model;

import java.util.Arrays;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * @author pavankulkarni
 *
 */
@Entity
@Table(name = "registerUser")
public class Register {

	@Id
	@GeneratedValue
	private Integer id;

	private String firstnameupp;

	private String lastnameupp;

	private String middlenameupp;

	private String gender;

	private String maritalstatus;

	private String print_firstname;

	private String print_lastname;
	
	//dob
	
	private String dd;
	
	private String mm;
	
	private String dob_year;
	
//Father Name
	private String father_fname;

	private String father_lname;

	private String father_mname;

	// CONTACT DETAILS

	private String mobile;

	private String email;

	private String landLine;

	private String communication;

	// DocumentProof

	private String proofofidentity;

	private String proofofresidence;

	private String dobproof;

	private String proofofoffice;

	// INCOMESOURCE
	private String[] chkincome;

	private String[] businessType;

	// ADDRESS INFORMATION

	// Residence

	private String flatroomnoresidence;

	private String premiseresidence;

	private String roadstreetresidence;

	private String arealocalityresidence;

	private String searchstate;

	private String district;

	private String pincoderesidence;

	private String residence_country;

	// Office
	private String nameofofc;

	private String floorrommno;

	private String nameofpremis;

	private String roadstreet;

	private String arealocaldiv;

	private String towncity;

	private String pincodezipcode;
	
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getFirstnameupp() {
		return firstnameupp;
	}

	public void setFirstnameupp(String firstnameupp) {
		this.firstnameupp = firstnameupp;
	}

	public String getLastnameupp() {
		return lastnameupp;
	}

	public void setLastnameupp(String lastnameupp) {
		this.lastnameupp = lastnameupp;
	}

	public String getMiddlenameupp() {
		return middlenameupp;
	}

	public void setMiddlenameupp(String middlenameupp) {
		this.middlenameupp = middlenameupp;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getMaritalstatus() {
		return maritalstatus;
	}

	public void setMaritalstatus(String maritalstatus) {
		this.maritalstatus = maritalstatus;
	}

	public String getPrint_firstname() {
		return print_firstname;
	}

	public void setPrint_firstname(String print_firstname) {
		this.print_firstname = print_firstname;
	}

	public String getPrint_lastname() {
		return print_lastname;
	}

	public void setPrint_lastname(String print_lastname) {
		this.print_lastname = print_lastname;
	}

	public String getFather_fname() {
		return father_fname;
	}

	public void setFather_fname(String father_fname) {
		this.father_fname = father_fname;
	}

	public String getFather_lname() {
		return father_lname;
	}

	public void setFather_lname(String father_lname) {
		this.father_lname = father_lname;
	}

	public String getFather_mname() {
		return father_mname;
	}

	public void setFather_mname(String father_mname) {
		this.father_mname = father_mname;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getLandLine() {
		return landLine;
	}

	public void setLandLine(String landLine) {
		this.landLine = landLine;
	}

	public String getCommunication() {
		return communication;
	}

	public void setCommunication(String communication) {
		this.communication = communication;
	}

	public String getProofofidentity() {
		return proofofidentity;
	}

	public void setProofofidentity(String proofofidentity) {
		this.proofofidentity = proofofidentity;
	}

	public String getProofofresidence() {
		return proofofresidence;
	}

	public void setProofofresidence(String proofofresidence) {
		this.proofofresidence = proofofresidence;
	}

	public String getDobproof() {
		return dobproof;
	}

	public void setDobproof(String dobproof) {
		this.dobproof = dobproof;
	}

	public String getProofofoffice() {
		return proofofoffice;
	}

	public void setProofofoffice(String proofofoffice) {
		this.proofofoffice = proofofoffice;
	}

	public String[] getChkincome() {
		return chkincome;
	}

	public void setChkincome(String[] chkincome) {
		this.chkincome = chkincome;
	}

	public String[] getBusinessType() {
		return businessType;
	}

	public void setBusinessType(String[] businessType) {
		this.businessType = businessType;
	}

	public String getFlatroomnoresidence() {
		return flatroomnoresidence;
	}

	public void setFlatroomnoresidence(String flatroomnoresidence) {
		this.flatroomnoresidence = flatroomnoresidence;
	}

	public String getPremiseresidence() {
		return premiseresidence;
	}

	public void setPremiseresidence(String premiseresidence) {
		this.premiseresidence = premiseresidence;
	}

	public String getRoadstreetresidence() {
		return roadstreetresidence;
	}

	public void setRoadstreetresidence(String roadstreetresidence) {
		this.roadstreetresidence = roadstreetresidence;
	}

	public String getArealocalityresidence() {
		return arealocalityresidence;
	}

	public void setArealocalityresidence(String arealocalityresidence) {
		this.arealocalityresidence = arealocalityresidence;
	}

	public String getSearchstate() {
		return searchstate;
	}

	public void setSearchstate(String searchstate) {
		this.searchstate = searchstate;
	}

	public String getDistrict() {
		return district;
	}

	public void setDistrict(String district) {
		this.district = district;
	}

	public String getPincoderesidence() {
		return pincoderesidence;
	}

	public void setPincoderesidence(String pincoderesidence) {
		this.pincoderesidence = pincoderesidence;
	}


	public String getNameofofc() {
		return nameofofc;
	}

	public void setNameofofc(String nameofofc) {
		this.nameofofc = nameofofc;
	}

	public String getFloorrommno() {
		return floorrommno;
	}

	public void setFloorrommno(String floorrommno) {
		this.floorrommno = floorrommno;
	}

	public String getNameofpremis() {
		return nameofpremis;
	}

	public void setNameofpremis(String nameofpremis) {
		this.nameofpremis = nameofpremis;
	}

	public String getRoadstreet() {
		return roadstreet;
	}

	public void setRoadstreet(String roadstreet) {
		this.roadstreet = roadstreet;
	}

	public String getArealocaldiv() {
		return arealocaldiv;
	}

	public void setArealocaldiv(String arealocaldiv) {
		this.arealocaldiv = arealocaldiv;
	}

	public String getTowncity() {
		return towncity;
	}

	public void setTowncity(String towncity) {
		this.towncity = towncity;
	}

	public String getPincodezipcode() {
		return pincodezipcode;
	}

	public void setPincodezipcode(String pincodezipcode) {
		this.pincodezipcode = pincodezipcode;
	}
	
	public String getResidence_country() {
		return residence_country;
	}

	public void setResidence_country(String residence_country) {
		this.residence_country = residence_country;
	}


	public String getDd() {
		return dd;
	}

	public void setDd(String dd) {
		this.dd = dd;
	}

	public String getMm() {
		return mm;
	}

	public void setMm(String mm) {
		this.mm = mm;
	}

	public String getDob_year() {
		return dob_year;
	}

	public void setDob_year(String dob_year) {
		this.dob_year = dob_year;
	}




	@Override
	public String toString() {
		return "Register [id=" + id + ", firstnameupp=" + firstnameupp + ", lastnameupp=" + lastnameupp
				+ ", middlenameupp=" + middlenameupp + ", gender=" + gender + ", maritalstatus=" + maritalstatus
				+ ", print_firstname=" + print_firstname + ", print_lastname=" + print_lastname + ", father_fname="
				+ father_fname + ", father_lname=" + father_lname + ", father_mname=" + father_mname + ", mobile="
				+ mobile + ", email=" + email + ", landLine=" + landLine + ", communication=" + communication
				+ ", proofofidentity=" + proofofidentity + ", proofofresidence=" + proofofresidence + ", dobproof="
				+ dobproof + ", proofofoffice=" + proofofoffice + ", chkincome=" + Arrays.toString(chkincome)
				+ ", businessType=" + Arrays.toString(businessType) + ", flatroomnoresidence=" + flatroomnoresidence
				+ ", premiseresidence=" + premiseresidence + ", roadstreetresidence=" + roadstreetresidence
				+ ", arealocalityresidence=" + arealocalityresidence + ", searchstate=" + searchstate + ", district="
				+ district + ", pincoderesidence=" + pincoderesidence + ", residence_country=" + residence_country + ", nameofofc=" + nameofofc
				+ ", floorrommno=" + floorrommno + ", nameofpremis=" + nameofpremis + ", roadstreet=" + roadstreet
				+ ", arealocaldiv=" + arealocaldiv + ", towncity=" + towncity + ", pincodezipcode=" + pincodezipcode
				+ "]";
	}


}

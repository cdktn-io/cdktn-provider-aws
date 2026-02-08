# `odbNetwork` Submodule <a name="`odbNetwork` Submodule" id="@cdktn/provider-aws.odbNetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OdbNetwork <a name="OdbNetwork" id="@cdktn/provider-aws.odbNetwork.OdbNetwork"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/odb_network aws_odb_network}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.Initializer"></a>

```python
from cdktn_provider_aws import odb_network

odbNetwork.OdbNetwork(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  availability_zone_id: str,
  backup_subnet_cidr: str,
  client_subnet_cidr: str,
  display_name: str,
  s3_access: str,
  zero_etl_access: str,
  availability_zone: str = None,
  custom_domain_name: str = None,
  default_dns_prefix: str = None,
  delete_associated_resources: bool | IResolvable = None,
  kms_access: str = None,
  kms_policy_document: str = None,
  region: str = None,
  s3_policy_document: str = None,
  sts_access: str = None,
  sts_policy_document: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: OdbNetworkTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.Initializer.parameter.availabilityZoneId">availability_zone_id</a></code> | <code>str</code> | The AZ ID of the AZ where the ODB network is located. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.Initializer.parameter.backupSubnetCidr">backup_subnet_cidr</a></code> | <code>str</code> | The CIDR range of the backup subnet for the ODB network. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.Initializer.parameter.clientSubnetCidr">client_subnet_cidr</a></code> | <code>str</code> | The CIDR notation for the network resource. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The user-friendly name for the odb network. Changing this will force terraform to create a new resource. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.Initializer.parameter.s3Access">s3_access</a></code> | <code>str</code> | Specifies the configuration for Amazon S3 access from the ODB network. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.Initializer.parameter.zeroEtlAccess">zero_etl_access</a></code> | <code>str</code> | Specifies the configuration for Zero-ETL access from the ODB network. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.Initializer.parameter.availabilityZone">availability_zone</a></code> | <code>str</code> | The name of the Availability Zone (AZ) where the odb network is located. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.Initializer.parameter.customDomainName">custom_domain_name</a></code> | <code>str</code> | The name of the custom domain that the network is located. custom_domain_name and default_dns_prefix both can't be given. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.Initializer.parameter.defaultDnsPrefix">default_dns_prefix</a></code> | <code>str</code> | The default DNS prefix for the network resource. Changing this will force terraform to create new resource. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.Initializer.parameter.deleteAssociatedResources">delete_associated_resources</a></code> | <code>bool \| cdktf.IResolvable</code> | If set to true deletes associated OCI resources. Default false. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.Initializer.parameter.kmsAccess">kms_access</a></code> | <code>str</code> | Specifies the configuration for Amazon KMS access from the ODB network. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.Initializer.parameter.kmsPolicyDocument">kms_policy_document</a></code> | <code>str</code> | Specifies the endpoint policy for Amazon KMS access from the ODB network. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.Initializer.parameter.s3PolicyDocument">s3_policy_document</a></code> | <code>str</code> | Specifies the endpoint policy for Amazon S3 access from the ODB network. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.Initializer.parameter.stsAccess">sts_access</a></code> | <code>str</code> | Specifies the configuration for Amazon STS access from the ODB network. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.Initializer.parameter.stsPolicyDocument">sts_policy_document</a></code> | <code>str</code> | Specifies the endpoint policy for Amazon STS access from the ODB network. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/odb_network#tags OdbNetwork#tags}. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkTimeouts">OdbNetworkTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `availability_zone_id`<sup>Required</sup> <a name="availability_zone_id" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.Initializer.parameter.availabilityZoneId"></a>

- *Type:* str

The AZ ID of the AZ where the ODB network is located.

Changing this will force terraform to create new resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/odb_network#availability_zone_id OdbNetwork#availability_zone_id}

---

##### `backup_subnet_cidr`<sup>Required</sup> <a name="backup_subnet_cidr" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.Initializer.parameter.backupSubnetCidr"></a>

- *Type:* str

The CIDR range of the backup subnet for the ODB network.

Changing this will force terraform to create new resource.
Constraints:
- Must not overlap with the CIDR range of the client subnet.
- Must not overlap with the CIDR ranges of the VPCs that are connected to the
ODB network.
- Must not use the following CIDR ranges that are reserved by OCI:
- 100.106.0.0/16 and 100.107.0.0/16
- 169.254.0.0/16
- 224.0.0.0 - 239.255.255.255
- 240.0.0.0 - 255.255.255.255

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/odb_network#backup_subnet_cidr OdbNetwork#backup_subnet_cidr}

---

##### `client_subnet_cidr`<sup>Required</sup> <a name="client_subnet_cidr" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.Initializer.parameter.clientSubnetCidr"></a>

- *Type:* str

The CIDR notation for the network resource.

Changing this will force terraform to create new resource.
Constraints:
- Must not overlap with the CIDR range of the backup subnet.
- Must not overlap with the CIDR ranges of the VPCs that are connected to the
ODB network.
- Must not use the following CIDR ranges that are reserved by OCI:
- 100.106.0.0/16 and 100.107.0.0/16
- 169.254.0.0/16
- 224.0.0.0 - 239.255.255.255
- 240.0.0.0 - 255.255.255.255

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/odb_network#client_subnet_cidr OdbNetwork#client_subnet_cidr}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.Initializer.parameter.displayName"></a>

- *Type:* str

The user-friendly name for the odb network. Changing this will force terraform to create a new resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/odb_network#display_name OdbNetwork#display_name}

---

##### `s3_access`<sup>Required</sup> <a name="s3_access" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.Initializer.parameter.s3Access"></a>

- *Type:* str

Specifies the configuration for Amazon S3 access from the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/odb_network#s3_access OdbNetwork#s3_access}

---

##### `zero_etl_access`<sup>Required</sup> <a name="zero_etl_access" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.Initializer.parameter.zeroEtlAccess"></a>

- *Type:* str

Specifies the configuration for Zero-ETL access from the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/odb_network#zero_etl_access OdbNetwork#zero_etl_access}

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.Initializer.parameter.availabilityZone"></a>

- *Type:* str

The name of the Availability Zone (AZ) where the odb network is located.

Changing this will force terraform to create new resource

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/odb_network#availability_zone OdbNetwork#availability_zone}

---

##### `custom_domain_name`<sup>Optional</sup> <a name="custom_domain_name" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.Initializer.parameter.customDomainName"></a>

- *Type:* str

The name of the custom domain that the network is located. custom_domain_name and default_dns_prefix both can't be given.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/odb_network#custom_domain_name OdbNetwork#custom_domain_name}

---

##### `default_dns_prefix`<sup>Optional</sup> <a name="default_dns_prefix" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.Initializer.parameter.defaultDnsPrefix"></a>

- *Type:* str

The default DNS prefix for the network resource. Changing this will force terraform to create new resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/odb_network#default_dns_prefix OdbNetwork#default_dns_prefix}

---

##### `delete_associated_resources`<sup>Optional</sup> <a name="delete_associated_resources" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.Initializer.parameter.deleteAssociatedResources"></a>

- *Type:* bool | cdktf.IResolvable

If set to true deletes associated OCI resources. Default false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/odb_network#delete_associated_resources OdbNetwork#delete_associated_resources}

---

##### `kms_access`<sup>Optional</sup> <a name="kms_access" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.Initializer.parameter.kmsAccess"></a>

- *Type:* str

Specifies the configuration for Amazon KMS access from the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/odb_network#kms_access OdbNetwork#kms_access}

---

##### `kms_policy_document`<sup>Optional</sup> <a name="kms_policy_document" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.Initializer.parameter.kmsPolicyDocument"></a>

- *Type:* str

Specifies the endpoint policy for Amazon KMS access from the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/odb_network#kms_policy_document OdbNetwork#kms_policy_document}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/odb_network#region OdbNetwork#region}

---

##### `s3_policy_document`<sup>Optional</sup> <a name="s3_policy_document" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.Initializer.parameter.s3PolicyDocument"></a>

- *Type:* str

Specifies the endpoint policy for Amazon S3 access from the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/odb_network#s3_policy_document OdbNetwork#s3_policy_document}

---

##### `sts_access`<sup>Optional</sup> <a name="sts_access" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.Initializer.parameter.stsAccess"></a>

- *Type:* str

Specifies the configuration for Amazon STS access from the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/odb_network#sts_access OdbNetwork#sts_access}

---

##### `sts_policy_document`<sup>Optional</sup> <a name="sts_policy_document" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.Initializer.parameter.stsPolicyDocument"></a>

- *Type:* str

Specifies the endpoint policy for Amazon STS access from the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/odb_network#sts_policy_document OdbNetwork#sts_policy_document}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/odb_network#tags OdbNetwork#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkTimeouts">OdbNetworkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/odb_network#timeouts OdbNetwork#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.resetAvailabilityZone">reset_availability_zone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.resetCustomDomainName">reset_custom_domain_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.resetDefaultDnsPrefix">reset_default_dns_prefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.resetDeleteAssociatedResources">reset_delete_associated_resources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.resetKmsAccess">reset_kms_access</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.resetKmsPolicyDocument">reset_kms_policy_document</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.resetS3PolicyDocument">reset_s3_policy_document</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.resetStsAccess">reset_sts_access</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.resetStsPolicyDocument">reset_sts_policy_document</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/odb_network#create OdbNetwork#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/odb_network#delete OdbNetwork#delete}

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.putTimeouts.parameter.update"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/odb_network#update OdbNetwork#update}

---

##### `reset_availability_zone` <a name="reset_availability_zone" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.resetAvailabilityZone"></a>

```python
def reset_availability_zone() -> None
```

##### `reset_custom_domain_name` <a name="reset_custom_domain_name" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.resetCustomDomainName"></a>

```python
def reset_custom_domain_name() -> None
```

##### `reset_default_dns_prefix` <a name="reset_default_dns_prefix" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.resetDefaultDnsPrefix"></a>

```python
def reset_default_dns_prefix() -> None
```

##### `reset_delete_associated_resources` <a name="reset_delete_associated_resources" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.resetDeleteAssociatedResources"></a>

```python
def reset_delete_associated_resources() -> None
```

##### `reset_kms_access` <a name="reset_kms_access" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.resetKmsAccess"></a>

```python
def reset_kms_access() -> None
```

##### `reset_kms_policy_document` <a name="reset_kms_policy_document" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.resetKmsPolicyDocument"></a>

```python
def reset_kms_policy_document() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_s3_policy_document` <a name="reset_s3_policy_document" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.resetS3PolicyDocument"></a>

```python
def reset_s3_policy_document() -> None
```

##### `reset_sts_access` <a name="reset_sts_access" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.resetStsAccess"></a>

```python
def reset_sts_access() -> None
```

##### `reset_sts_policy_document` <a name="reset_sts_policy_document" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.resetStsPolicyDocument"></a>

```python
def reset_sts_policy_document() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a OdbNetwork resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.isConstruct"></a>

```python
from cdktn_provider_aws import odb_network

odbNetwork.OdbNetwork.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.isTerraformElement"></a>

```python
from cdktn_provider_aws import odb_network

odbNetwork.OdbNetwork.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.isTerraformResource"></a>

```python
from cdktn_provider_aws import odb_network

odbNetwork.OdbNetwork.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.generateConfigForImport"></a>

```python
from cdktn_provider_aws import odb_network

odbNetwork.OdbNetwork.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a OdbNetwork resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OdbNetwork to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OdbNetwork that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/odb_network#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OdbNetwork to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.managedServices">managed_services</a></code> | <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesList">OdbNetworkManagedServicesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.ociDnsForwardingConfigs">oci_dns_forwarding_configs</a></code> | <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsList">OdbNetworkOciDnsForwardingConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.ociNetworkAnchorId">oci_network_anchor_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.ociNetworkAnchorUrl">oci_network_anchor_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.ociResourceAnchorName">oci_resource_anchor_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.ociVcnId">oci_vcn_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.ociVcnUrl">oci_vcn_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.peeredCidrs">peered_cidrs</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.percentProgress">percent_progress</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.statusReason">status_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.tagsAll">tags_all</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference">OdbNetworkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.availabilityZoneIdInput">availability_zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.availabilityZoneInput">availability_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.backupSubnetCidrInput">backup_subnet_cidr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.clientSubnetCidrInput">client_subnet_cidr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.customDomainNameInput">custom_domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.defaultDnsPrefixInput">default_dns_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.deleteAssociatedResourcesInput">delete_associated_resources_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.kmsAccessInput">kms_access_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.kmsPolicyDocumentInput">kms_policy_document_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.s3AccessInput">s3_access_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.s3PolicyDocumentInput">s3_policy_document_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.stsAccessInput">sts_access_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.stsPolicyDocumentInput">sts_policy_document_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.timeoutsInput">timeouts_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkTimeouts">OdbNetworkTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.zeroEtlAccessInput">zero_etl_access_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.availabilityZoneId">availability_zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.backupSubnetCidr">backup_subnet_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.clientSubnetCidr">client_subnet_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.customDomainName">custom_domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.defaultDnsPrefix">default_dns_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.deleteAssociatedResources">delete_associated_resources</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.kmsAccess">kms_access</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.kmsPolicyDocument">kms_policy_document</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.s3Access">s3_access</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.s3PolicyDocument">s3_policy_document</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.stsAccess">sts_access</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.stsPolicyDocument">sts_policy_document</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.zeroEtlAccess">zero_etl_access</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `managed_services`<sup>Required</sup> <a name="managed_services" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.managedServices"></a>

```python
managed_services: OdbNetworkManagedServicesList
```

- *Type:* <a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesList">OdbNetworkManagedServicesList</a>

---

##### `oci_dns_forwarding_configs`<sup>Required</sup> <a name="oci_dns_forwarding_configs" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.ociDnsForwardingConfigs"></a>

```python
oci_dns_forwarding_configs: OdbNetworkOciDnsForwardingConfigsList
```

- *Type:* <a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsList">OdbNetworkOciDnsForwardingConfigsList</a>

---

##### `oci_network_anchor_id`<sup>Required</sup> <a name="oci_network_anchor_id" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.ociNetworkAnchorId"></a>

```python
oci_network_anchor_id: str
```

- *Type:* str

---

##### `oci_network_anchor_url`<sup>Required</sup> <a name="oci_network_anchor_url" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.ociNetworkAnchorUrl"></a>

```python
oci_network_anchor_url: str
```

- *Type:* str

---

##### `oci_resource_anchor_name`<sup>Required</sup> <a name="oci_resource_anchor_name" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.ociResourceAnchorName"></a>

```python
oci_resource_anchor_name: str
```

- *Type:* str

---

##### `oci_vcn_id`<sup>Required</sup> <a name="oci_vcn_id" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.ociVcnId"></a>

```python
oci_vcn_id: str
```

- *Type:* str

---

##### `oci_vcn_url`<sup>Required</sup> <a name="oci_vcn_url" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.ociVcnUrl"></a>

```python
oci_vcn_url: str
```

- *Type:* str

---

##### `peered_cidrs`<sup>Required</sup> <a name="peered_cidrs" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.peeredCidrs"></a>

```python
peered_cidrs: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `percent_progress`<sup>Required</sup> <a name="percent_progress" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.percentProgress"></a>

```python
percent_progress: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `status_reason`<sup>Required</sup> <a name="status_reason" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.statusReason"></a>

```python
status_reason: str
```

- *Type:* str

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.timeouts"></a>

```python
timeouts: OdbNetworkTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference">OdbNetworkTimeoutsOutputReference</a>

---

##### `availability_zone_id_input`<sup>Optional</sup> <a name="availability_zone_id_input" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.availabilityZoneIdInput"></a>

```python
availability_zone_id_input: str
```

- *Type:* str

---

##### `availability_zone_input`<sup>Optional</sup> <a name="availability_zone_input" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.availabilityZoneInput"></a>

```python
availability_zone_input: str
```

- *Type:* str

---

##### `backup_subnet_cidr_input`<sup>Optional</sup> <a name="backup_subnet_cidr_input" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.backupSubnetCidrInput"></a>

```python
backup_subnet_cidr_input: str
```

- *Type:* str

---

##### `client_subnet_cidr_input`<sup>Optional</sup> <a name="client_subnet_cidr_input" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.clientSubnetCidrInput"></a>

```python
client_subnet_cidr_input: str
```

- *Type:* str

---

##### `custom_domain_name_input`<sup>Optional</sup> <a name="custom_domain_name_input" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.customDomainNameInput"></a>

```python
custom_domain_name_input: str
```

- *Type:* str

---

##### `default_dns_prefix_input`<sup>Optional</sup> <a name="default_dns_prefix_input" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.defaultDnsPrefixInput"></a>

```python
default_dns_prefix_input: str
```

- *Type:* str

---

##### `delete_associated_resources_input`<sup>Optional</sup> <a name="delete_associated_resources_input" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.deleteAssociatedResourcesInput"></a>

```python
delete_associated_resources_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `kms_access_input`<sup>Optional</sup> <a name="kms_access_input" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.kmsAccessInput"></a>

```python
kms_access_input: str
```

- *Type:* str

---

##### `kms_policy_document_input`<sup>Optional</sup> <a name="kms_policy_document_input" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.kmsPolicyDocumentInput"></a>

```python
kms_policy_document_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `s3_access_input`<sup>Optional</sup> <a name="s3_access_input" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.s3AccessInput"></a>

```python
s3_access_input: str
```

- *Type:* str

---

##### `s3_policy_document_input`<sup>Optional</sup> <a name="s3_policy_document_input" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.s3PolicyDocumentInput"></a>

```python
s3_policy_document_input: str
```

- *Type:* str

---

##### `sts_access_input`<sup>Optional</sup> <a name="sts_access_input" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.stsAccessInput"></a>

```python
sts_access_input: str
```

- *Type:* str

---

##### `sts_policy_document_input`<sup>Optional</sup> <a name="sts_policy_document_input" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.stsPolicyDocumentInput"></a>

```python
sts_policy_document_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | OdbNetworkTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkTimeouts">OdbNetworkTimeouts</a>

---

##### `zero_etl_access_input`<sup>Optional</sup> <a name="zero_etl_access_input" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.zeroEtlAccessInput"></a>

```python
zero_etl_access_input: str
```

- *Type:* str

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `availability_zone_id`<sup>Required</sup> <a name="availability_zone_id" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.availabilityZoneId"></a>

```python
availability_zone_id: str
```

- *Type:* str

---

##### `backup_subnet_cidr`<sup>Required</sup> <a name="backup_subnet_cidr" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.backupSubnetCidr"></a>

```python
backup_subnet_cidr: str
```

- *Type:* str

---

##### `client_subnet_cidr`<sup>Required</sup> <a name="client_subnet_cidr" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.clientSubnetCidr"></a>

```python
client_subnet_cidr: str
```

- *Type:* str

---

##### `custom_domain_name`<sup>Required</sup> <a name="custom_domain_name" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.customDomainName"></a>

```python
custom_domain_name: str
```

- *Type:* str

---

##### `default_dns_prefix`<sup>Required</sup> <a name="default_dns_prefix" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.defaultDnsPrefix"></a>

```python
default_dns_prefix: str
```

- *Type:* str

---

##### `delete_associated_resources`<sup>Required</sup> <a name="delete_associated_resources" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.deleteAssociatedResources"></a>

```python
delete_associated_resources: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `kms_access`<sup>Required</sup> <a name="kms_access" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.kmsAccess"></a>

```python
kms_access: str
```

- *Type:* str

---

##### `kms_policy_document`<sup>Required</sup> <a name="kms_policy_document" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.kmsPolicyDocument"></a>

```python
kms_policy_document: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `s3_access`<sup>Required</sup> <a name="s3_access" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.s3Access"></a>

```python
s3_access: str
```

- *Type:* str

---

##### `s3_policy_document`<sup>Required</sup> <a name="s3_policy_document" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.s3PolicyDocument"></a>

```python
s3_policy_document: str
```

- *Type:* str

---

##### `sts_access`<sup>Required</sup> <a name="sts_access" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.stsAccess"></a>

```python
sts_access: str
```

- *Type:* str

---

##### `sts_policy_document`<sup>Required</sup> <a name="sts_policy_document" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.stsPolicyDocument"></a>

```python
sts_policy_document: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `zero_etl_access`<sup>Required</sup> <a name="zero_etl_access" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.zeroEtlAccess"></a>

```python
zero_etl_access: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OdbNetworkConfig <a name="OdbNetworkConfig" id="@cdktn/provider-aws.odbNetwork.OdbNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.Initializer"></a>

```python
from cdktn_provider_aws import odb_network

odbNetwork.OdbNetworkConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  availability_zone_id: str,
  backup_subnet_cidr: str,
  client_subnet_cidr: str,
  display_name: str,
  s3_access: str,
  zero_etl_access: str,
  availability_zone: str = None,
  custom_domain_name: str = None,
  default_dns_prefix: str = None,
  delete_associated_resources: bool | IResolvable = None,
  kms_access: str = None,
  kms_policy_document: str = None,
  region: str = None,
  s3_policy_document: str = None,
  sts_access: str = None,
  sts_policy_document: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: OdbNetworkTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.availabilityZoneId">availability_zone_id</a></code> | <code>str</code> | The AZ ID of the AZ where the ODB network is located. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.backupSubnetCidr">backup_subnet_cidr</a></code> | <code>str</code> | The CIDR range of the backup subnet for the ODB network. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.clientSubnetCidr">client_subnet_cidr</a></code> | <code>str</code> | The CIDR notation for the network resource. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.displayName">display_name</a></code> | <code>str</code> | The user-friendly name for the odb network. Changing this will force terraform to create a new resource. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.s3Access">s3_access</a></code> | <code>str</code> | Specifies the configuration for Amazon S3 access from the ODB network. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.zeroEtlAccess">zero_etl_access</a></code> | <code>str</code> | Specifies the configuration for Zero-ETL access from the ODB network. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.availabilityZone">availability_zone</a></code> | <code>str</code> | The name of the Availability Zone (AZ) where the odb network is located. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.customDomainName">custom_domain_name</a></code> | <code>str</code> | The name of the custom domain that the network is located. custom_domain_name and default_dns_prefix both can't be given. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.defaultDnsPrefix">default_dns_prefix</a></code> | <code>str</code> | The default DNS prefix for the network resource. Changing this will force terraform to create new resource. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.deleteAssociatedResources">delete_associated_resources</a></code> | <code>bool \| cdktf.IResolvable</code> | If set to true deletes associated OCI resources. Default false. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.kmsAccess">kms_access</a></code> | <code>str</code> | Specifies the configuration for Amazon KMS access from the ODB network. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.kmsPolicyDocument">kms_policy_document</a></code> | <code>str</code> | Specifies the endpoint policy for Amazon KMS access from the ODB network. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.s3PolicyDocument">s3_policy_document</a></code> | <code>str</code> | Specifies the endpoint policy for Amazon S3 access from the ODB network. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.stsAccess">sts_access</a></code> | <code>str</code> | Specifies the configuration for Amazon STS access from the ODB network. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.stsPolicyDocument">sts_policy_document</a></code> | <code>str</code> | Specifies the endpoint policy for Amazon STS access from the ODB network. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/odb_network#tags OdbNetwork#tags}. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkTimeouts">OdbNetworkTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `availability_zone_id`<sup>Required</sup> <a name="availability_zone_id" id="@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.availabilityZoneId"></a>

```python
availability_zone_id: str
```

- *Type:* str

The AZ ID of the AZ where the ODB network is located.

Changing this will force terraform to create new resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/odb_network#availability_zone_id OdbNetwork#availability_zone_id}

---

##### `backup_subnet_cidr`<sup>Required</sup> <a name="backup_subnet_cidr" id="@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.backupSubnetCidr"></a>

```python
backup_subnet_cidr: str
```

- *Type:* str

The CIDR range of the backup subnet for the ODB network.

Changing this will force terraform to create new resource.
Constraints:
- Must not overlap with the CIDR range of the client subnet.
- Must not overlap with the CIDR ranges of the VPCs that are connected to the
ODB network.
- Must not use the following CIDR ranges that are reserved by OCI:
- 100.106.0.0/16 and 100.107.0.0/16
- 169.254.0.0/16
- 224.0.0.0 - 239.255.255.255
- 240.0.0.0 - 255.255.255.255

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/odb_network#backup_subnet_cidr OdbNetwork#backup_subnet_cidr}

---

##### `client_subnet_cidr`<sup>Required</sup> <a name="client_subnet_cidr" id="@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.clientSubnetCidr"></a>

```python
client_subnet_cidr: str
```

- *Type:* str

The CIDR notation for the network resource.

Changing this will force terraform to create new resource.
Constraints:
- Must not overlap with the CIDR range of the backup subnet.
- Must not overlap with the CIDR ranges of the VPCs that are connected to the
ODB network.
- Must not use the following CIDR ranges that are reserved by OCI:
- 100.106.0.0/16 and 100.107.0.0/16
- 169.254.0.0/16
- 224.0.0.0 - 239.255.255.255
- 240.0.0.0 - 255.255.255.255

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/odb_network#client_subnet_cidr OdbNetwork#client_subnet_cidr}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The user-friendly name for the odb network. Changing this will force terraform to create a new resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/odb_network#display_name OdbNetwork#display_name}

---

##### `s3_access`<sup>Required</sup> <a name="s3_access" id="@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.s3Access"></a>

```python
s3_access: str
```

- *Type:* str

Specifies the configuration for Amazon S3 access from the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/odb_network#s3_access OdbNetwork#s3_access}

---

##### `zero_etl_access`<sup>Required</sup> <a name="zero_etl_access" id="@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.zeroEtlAccess"></a>

```python
zero_etl_access: str
```

- *Type:* str

Specifies the configuration for Zero-ETL access from the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/odb_network#zero_etl_access OdbNetwork#zero_etl_access}

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

The name of the Availability Zone (AZ) where the odb network is located.

Changing this will force terraform to create new resource

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/odb_network#availability_zone OdbNetwork#availability_zone}

---

##### `custom_domain_name`<sup>Optional</sup> <a name="custom_domain_name" id="@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.customDomainName"></a>

```python
custom_domain_name: str
```

- *Type:* str

The name of the custom domain that the network is located. custom_domain_name and default_dns_prefix both can't be given.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/odb_network#custom_domain_name OdbNetwork#custom_domain_name}

---

##### `default_dns_prefix`<sup>Optional</sup> <a name="default_dns_prefix" id="@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.defaultDnsPrefix"></a>

```python
default_dns_prefix: str
```

- *Type:* str

The default DNS prefix for the network resource. Changing this will force terraform to create new resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/odb_network#default_dns_prefix OdbNetwork#default_dns_prefix}

---

##### `delete_associated_resources`<sup>Optional</sup> <a name="delete_associated_resources" id="@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.deleteAssociatedResources"></a>

```python
delete_associated_resources: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

If set to true deletes associated OCI resources. Default false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/odb_network#delete_associated_resources OdbNetwork#delete_associated_resources}

---

##### `kms_access`<sup>Optional</sup> <a name="kms_access" id="@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.kmsAccess"></a>

```python
kms_access: str
```

- *Type:* str

Specifies the configuration for Amazon KMS access from the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/odb_network#kms_access OdbNetwork#kms_access}

---

##### `kms_policy_document`<sup>Optional</sup> <a name="kms_policy_document" id="@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.kmsPolicyDocument"></a>

```python
kms_policy_document: str
```

- *Type:* str

Specifies the endpoint policy for Amazon KMS access from the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/odb_network#kms_policy_document OdbNetwork#kms_policy_document}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/odb_network#region OdbNetwork#region}

---

##### `s3_policy_document`<sup>Optional</sup> <a name="s3_policy_document" id="@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.s3PolicyDocument"></a>

```python
s3_policy_document: str
```

- *Type:* str

Specifies the endpoint policy for Amazon S3 access from the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/odb_network#s3_policy_document OdbNetwork#s3_policy_document}

---

##### `sts_access`<sup>Optional</sup> <a name="sts_access" id="@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.stsAccess"></a>

```python
sts_access: str
```

- *Type:* str

Specifies the configuration for Amazon STS access from the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/odb_network#sts_access OdbNetwork#sts_access}

---

##### `sts_policy_document`<sup>Optional</sup> <a name="sts_policy_document" id="@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.stsPolicyDocument"></a>

```python
sts_policy_document: str
```

- *Type:* str

Specifies the endpoint policy for Amazon STS access from the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/odb_network#sts_policy_document OdbNetwork#sts_policy_document}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/odb_network#tags OdbNetwork#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.timeouts"></a>

```python
timeouts: OdbNetworkTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkTimeouts">OdbNetworkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/odb_network#timeouts OdbNetwork#timeouts}

---

### OdbNetworkManagedServices <a name="OdbNetworkManagedServices" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServices"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServices.Initializer"></a>

```python
from cdktn_provider_aws import odb_network

odbNetwork.OdbNetworkManagedServices()
```


### OdbNetworkManagedServicesKmsAccess <a name="OdbNetworkManagedServicesKmsAccess" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccess.Initializer"></a>

```python
from cdktn_provider_aws import odb_network

odbNetwork.OdbNetworkManagedServicesKmsAccess()
```


### OdbNetworkManagedServicesManagedS3BackupAccess <a name="OdbNetworkManagedServicesManagedS3BackupAccess" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccess.Initializer"></a>

```python
from cdktn_provider_aws import odb_network

odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccess()
```


### OdbNetworkManagedServicesS3Access <a name="OdbNetworkManagedServicesS3Access" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3Access"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3Access.Initializer"></a>

```python
from cdktn_provider_aws import odb_network

odbNetwork.OdbNetworkManagedServicesS3Access()
```


### OdbNetworkManagedServicesServiceNetworkEndpoint <a name="OdbNetworkManagedServicesServiceNetworkEndpoint" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpoint.Initializer"></a>

```python
from cdktn_provider_aws import odb_network

odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpoint()
```


### OdbNetworkManagedServicesStsAccess <a name="OdbNetworkManagedServicesStsAccess" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccess.Initializer"></a>

```python
from cdktn_provider_aws import odb_network

odbNetwork.OdbNetworkManagedServicesStsAccess()
```


### OdbNetworkManagedServicesZeroEtlAccess <a name="OdbNetworkManagedServicesZeroEtlAccess" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccess.Initializer"></a>

```python
from cdktn_provider_aws import odb_network

odbNetwork.OdbNetworkManagedServicesZeroEtlAccess()
```


### OdbNetworkOciDnsForwardingConfigs <a name="OdbNetworkOciDnsForwardingConfigs" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigs.Initializer"></a>

```python
from cdktn_provider_aws import odb_network

odbNetwork.OdbNetworkOciDnsForwardingConfigs()
```


### OdbNetworkTimeouts <a name="OdbNetworkTimeouts" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeouts.Initializer"></a>

```python
from cdktn_provider_aws import odb_network

odbNetwork.OdbNetworkTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkTimeouts.property.update">update</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/odb_network#create OdbNetwork#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/odb_network#delete OdbNetwork#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/odb_network#update OdbNetwork#update}

---

## Classes <a name="Classes" id="Classes"></a>

### OdbNetworkManagedServicesKmsAccessList <a name="OdbNetworkManagedServicesKmsAccessList" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessList.Initializer"></a>

```python
from cdktn_provider_aws import odb_network

odbNetwork.OdbNetworkManagedServicesKmsAccessList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OdbNetworkManagedServicesKmsAccessOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### OdbNetworkManagedServicesKmsAccessOutputReference <a name="OdbNetworkManagedServicesKmsAccessOutputReference" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import odb_network

odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.property.ipv4Addresses">ipv4_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.property.kmsPolicyDocument">kms_policy_document</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccess">OdbNetworkManagedServicesKmsAccess</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `ipv4_addresses`<sup>Required</sup> <a name="ipv4_addresses" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.property.ipv4Addresses"></a>

```python
ipv4_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `kms_policy_document`<sup>Required</sup> <a name="kms_policy_document" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.property.kmsPolicyDocument"></a>

```python
kms_policy_document: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.property.internalValue"></a>

```python
internal_value: OdbNetworkManagedServicesKmsAccess
```

- *Type:* <a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccess">OdbNetworkManagedServicesKmsAccess</a>

---


### OdbNetworkManagedServicesList <a name="OdbNetworkManagedServicesList" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesList.Initializer"></a>

```python
from cdktn_provider_aws import odb_network

odbNetwork.OdbNetworkManagedServicesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OdbNetworkManagedServicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### OdbNetworkManagedServicesManagedS3BackupAccessList <a name="OdbNetworkManagedServicesManagedS3BackupAccessList" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessList.Initializer"></a>

```python
from cdktn_provider_aws import odb_network

odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OdbNetworkManagedServicesManagedS3BackupAccessOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### OdbNetworkManagedServicesManagedS3BackupAccessOutputReference <a name="OdbNetworkManagedServicesManagedS3BackupAccessOutputReference" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import odb_network

odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.ipv4Addresses">ipv4_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccess">OdbNetworkManagedServicesManagedS3BackupAccess</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ipv4_addresses`<sup>Required</sup> <a name="ipv4_addresses" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.ipv4Addresses"></a>

```python
ipv4_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.internalValue"></a>

```python
internal_value: OdbNetworkManagedServicesManagedS3BackupAccess
```

- *Type:* <a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccess">OdbNetworkManagedServicesManagedS3BackupAccess</a>

---


### OdbNetworkManagedServicesOutputReference <a name="OdbNetworkManagedServicesOutputReference" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import odb_network

odbNetwork.OdbNetworkManagedServicesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.property.kmsAccess">kms_access</a></code> | <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessList">OdbNetworkManagedServicesKmsAccessList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.property.managedS3BackupAccess">managed_s3_backup_access</a></code> | <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessList">OdbNetworkManagedServicesManagedS3BackupAccessList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.property.managedServiceIpv4Cidrs">managed_service_ipv4_cidrs</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.property.resourceGatewayArn">resource_gateway_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.property.s3Access">s3_access</a></code> | <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessList">OdbNetworkManagedServicesS3AccessList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.property.serviceNetworkArn">service_network_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.property.serviceNetworkEndpoint">service_network_endpoint</a></code> | <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointList">OdbNetworkManagedServicesServiceNetworkEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.property.stsAccess">sts_access</a></code> | <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessList">OdbNetworkManagedServicesStsAccessList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.property.zeroEtlAccess">zero_etl_access</a></code> | <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessList">OdbNetworkManagedServicesZeroEtlAccessList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServices">OdbNetworkManagedServices</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_access`<sup>Required</sup> <a name="kms_access" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.property.kmsAccess"></a>

```python
kms_access: OdbNetworkManagedServicesKmsAccessList
```

- *Type:* <a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessList">OdbNetworkManagedServicesKmsAccessList</a>

---

##### `managed_s3_backup_access`<sup>Required</sup> <a name="managed_s3_backup_access" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.property.managedS3BackupAccess"></a>

```python
managed_s3_backup_access: OdbNetworkManagedServicesManagedS3BackupAccessList
```

- *Type:* <a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessList">OdbNetworkManagedServicesManagedS3BackupAccessList</a>

---

##### `managed_service_ipv4_cidrs`<sup>Required</sup> <a name="managed_service_ipv4_cidrs" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.property.managedServiceIpv4Cidrs"></a>

```python
managed_service_ipv4_cidrs: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_gateway_arn`<sup>Required</sup> <a name="resource_gateway_arn" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.property.resourceGatewayArn"></a>

```python
resource_gateway_arn: str
```

- *Type:* str

---

##### `s3_access`<sup>Required</sup> <a name="s3_access" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.property.s3Access"></a>

```python
s3_access: OdbNetworkManagedServicesS3AccessList
```

- *Type:* <a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessList">OdbNetworkManagedServicesS3AccessList</a>

---

##### `service_network_arn`<sup>Required</sup> <a name="service_network_arn" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.property.serviceNetworkArn"></a>

```python
service_network_arn: str
```

- *Type:* str

---

##### `service_network_endpoint`<sup>Required</sup> <a name="service_network_endpoint" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.property.serviceNetworkEndpoint"></a>

```python
service_network_endpoint: OdbNetworkManagedServicesServiceNetworkEndpointList
```

- *Type:* <a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointList">OdbNetworkManagedServicesServiceNetworkEndpointList</a>

---

##### `sts_access`<sup>Required</sup> <a name="sts_access" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.property.stsAccess"></a>

```python
sts_access: OdbNetworkManagedServicesStsAccessList
```

- *Type:* <a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessList">OdbNetworkManagedServicesStsAccessList</a>

---

##### `zero_etl_access`<sup>Required</sup> <a name="zero_etl_access" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.property.zeroEtlAccess"></a>

```python
zero_etl_access: OdbNetworkManagedServicesZeroEtlAccessList
```

- *Type:* <a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessList">OdbNetworkManagedServicesZeroEtlAccessList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.property.internalValue"></a>

```python
internal_value: OdbNetworkManagedServices
```

- *Type:* <a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServices">OdbNetworkManagedServices</a>

---


### OdbNetworkManagedServicesS3AccessList <a name="OdbNetworkManagedServicesS3AccessList" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessList.Initializer"></a>

```python
from cdktn_provider_aws import odb_network

odbNetwork.OdbNetworkManagedServicesS3AccessList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OdbNetworkManagedServicesS3AccessOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### OdbNetworkManagedServicesS3AccessOutputReference <a name="OdbNetworkManagedServicesS3AccessOutputReference" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import odb_network

odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.property.ipv4Addresses">ipv4_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.property.s3PolicyDocument">s3_policy_document</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3Access">OdbNetworkManagedServicesS3Access</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `ipv4_addresses`<sup>Required</sup> <a name="ipv4_addresses" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.property.ipv4Addresses"></a>

```python
ipv4_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `s3_policy_document`<sup>Required</sup> <a name="s3_policy_document" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.property.s3PolicyDocument"></a>

```python
s3_policy_document: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.property.internalValue"></a>

```python
internal_value: OdbNetworkManagedServicesS3Access
```

- *Type:* <a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3Access">OdbNetworkManagedServicesS3Access</a>

---


### OdbNetworkManagedServicesServiceNetworkEndpointList <a name="OdbNetworkManagedServicesServiceNetworkEndpointList" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointList.Initializer"></a>

```python
from cdktn_provider_aws import odb_network

odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OdbNetworkManagedServicesServiceNetworkEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### OdbNetworkManagedServicesServiceNetworkEndpointOutputReference <a name="OdbNetworkManagedServicesServiceNetworkEndpointOutputReference" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import odb_network

odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.vpcEndpointId">vpc_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.vpcEndpointType">vpc_endpoint_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpoint">OdbNetworkManagedServicesServiceNetworkEndpoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `vpc_endpoint_id`<sup>Required</sup> <a name="vpc_endpoint_id" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.vpcEndpointId"></a>

```python
vpc_endpoint_id: str
```

- *Type:* str

---

##### `vpc_endpoint_type`<sup>Required</sup> <a name="vpc_endpoint_type" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.vpcEndpointType"></a>

```python
vpc_endpoint_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.internalValue"></a>

```python
internal_value: OdbNetworkManagedServicesServiceNetworkEndpoint
```

- *Type:* <a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpoint">OdbNetworkManagedServicesServiceNetworkEndpoint</a>

---


### OdbNetworkManagedServicesStsAccessList <a name="OdbNetworkManagedServicesStsAccessList" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessList.Initializer"></a>

```python
from cdktn_provider_aws import odb_network

odbNetwork.OdbNetworkManagedServicesStsAccessList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OdbNetworkManagedServicesStsAccessOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### OdbNetworkManagedServicesStsAccessOutputReference <a name="OdbNetworkManagedServicesStsAccessOutputReference" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import odb_network

odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.property.ipv4Addresses">ipv4_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.property.stsPolicyDocument">sts_policy_document</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccess">OdbNetworkManagedServicesStsAccess</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `ipv4_addresses`<sup>Required</sup> <a name="ipv4_addresses" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.property.ipv4Addresses"></a>

```python
ipv4_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `sts_policy_document`<sup>Required</sup> <a name="sts_policy_document" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.property.stsPolicyDocument"></a>

```python
sts_policy_document: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.property.internalValue"></a>

```python
internal_value: OdbNetworkManagedServicesStsAccess
```

- *Type:* <a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccess">OdbNetworkManagedServicesStsAccess</a>

---


### OdbNetworkManagedServicesZeroEtlAccessList <a name="OdbNetworkManagedServicesZeroEtlAccessList" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessList.Initializer"></a>

```python
from cdktn_provider_aws import odb_network

odbNetwork.OdbNetworkManagedServicesZeroEtlAccessList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OdbNetworkManagedServicesZeroEtlAccessOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### OdbNetworkManagedServicesZeroEtlAccessOutputReference <a name="OdbNetworkManagedServicesZeroEtlAccessOutputReference" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import odb_network

odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.property.cidr">cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccess">OdbNetworkManagedServicesZeroEtlAccess</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.property.cidr"></a>

```python
cidr: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.property.internalValue"></a>

```python
internal_value: OdbNetworkManagedServicesZeroEtlAccess
```

- *Type:* <a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccess">OdbNetworkManagedServicesZeroEtlAccess</a>

---


### OdbNetworkOciDnsForwardingConfigsList <a name="OdbNetworkOciDnsForwardingConfigsList" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsList.Initializer"></a>

```python
from cdktn_provider_aws import odb_network

odbNetwork.OdbNetworkOciDnsForwardingConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OdbNetworkOciDnsForwardingConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### OdbNetworkOciDnsForwardingConfigsOutputReference <a name="OdbNetworkOciDnsForwardingConfigsOutputReference" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import odb_network

odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.property.ociDnsListenerIp">oci_dns_listener_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigs">OdbNetworkOciDnsForwardingConfigs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `oci_dns_listener_ip`<sup>Required</sup> <a name="oci_dns_listener_ip" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.property.ociDnsListenerIp"></a>

```python
oci_dns_listener_ip: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.property.internalValue"></a>

```python
internal_value: OdbNetworkOciDnsForwardingConfigs
```

- *Type:* <a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigs">OdbNetworkOciDnsForwardingConfigs</a>

---


### OdbNetworkTimeoutsOutputReference <a name="OdbNetworkTimeoutsOutputReference" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import odb_network

odbNetwork.OdbNetworkTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkTimeouts">OdbNetworkTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OdbNetworkTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkTimeouts">OdbNetworkTimeouts</a>

---




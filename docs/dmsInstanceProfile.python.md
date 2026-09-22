# `dmsInstanceProfile` Submodule <a name="`dmsInstanceProfile` Submodule" id="@cdktn/provider-aws.dmsInstanceProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DmsInstanceProfile <a name="DmsInstanceProfile" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_instance_profile aws_dms_instance_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.Initializer"></a>

```python
from cdktn_provider_aws import dms_instance_profile

dmsInstanceProfile.DmsInstanceProfile(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  availability_zone: str = None,
  description: str = None,
  kms_key_arn: str = None,
  name: str = None,
  network_type: str = None,
  publicly_accessible: bool | IResolvable = None,
  region: str = None,
  subnet_group_identifier: str = None,
  tags: typing.Mapping[str] = None,
  vpc_security_group_ids: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.Initializer.parameter.availabilityZone">availability_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_instance_profile#availability_zone DmsInstanceProfile#availability_zone}. |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_instance_profile#description DmsInstanceProfile#description}. |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.Initializer.parameter.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_instance_profile#kms_key_arn DmsInstanceProfile#kms_key_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_instance_profile#name DmsInstanceProfile#name}. |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.Initializer.parameter.networkType">network_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_instance_profile#network_type DmsInstanceProfile#network_type}. |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.Initializer.parameter.publiclyAccessible">publicly_accessible</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_instance_profile#publicly_accessible DmsInstanceProfile#publicly_accessible}. |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.Initializer.parameter.subnetGroupIdentifier">subnet_group_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_instance_profile#subnet_group_identifier DmsInstanceProfile#subnet_group_identifier}. |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_instance_profile#tags DmsInstanceProfile#tags}. |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.Initializer.parameter.vpcSecurityGroupIds">vpc_security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_instance_profile#vpc_security_group_ids DmsInstanceProfile#vpc_security_group_ids}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.Initializer.parameter.availabilityZone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_instance_profile#availability_zone DmsInstanceProfile#availability_zone}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_instance_profile#description DmsInstanceProfile#description}.

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.Initializer.parameter.kmsKeyArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_instance_profile#kms_key_arn DmsInstanceProfile#kms_key_arn}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_instance_profile#name DmsInstanceProfile#name}.

---

##### `network_type`<sup>Optional</sup> <a name="network_type" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.Initializer.parameter.networkType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_instance_profile#network_type DmsInstanceProfile#network_type}.

---

##### `publicly_accessible`<sup>Optional</sup> <a name="publicly_accessible" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.Initializer.parameter.publiclyAccessible"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_instance_profile#publicly_accessible DmsInstanceProfile#publicly_accessible}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_instance_profile#region DmsInstanceProfile#region}

---

##### `subnet_group_identifier`<sup>Optional</sup> <a name="subnet_group_identifier" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.Initializer.parameter.subnetGroupIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_instance_profile#subnet_group_identifier DmsInstanceProfile#subnet_group_identifier}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_instance_profile#tags DmsInstanceProfile#tags}.

---

##### `vpc_security_group_ids`<sup>Optional</sup> <a name="vpc_security_group_ids" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.Initializer.parameter.vpcSecurityGroupIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_instance_profile#vpc_security_group_ids DmsInstanceProfile#vpc_security_group_ids}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.resetAvailabilityZone">reset_availability_zone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.resetKmsKeyArn">reset_kms_key_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.resetNetworkType">reset_network_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.resetPubliclyAccessible">reset_publicly_accessible</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.resetSubnetGroupIdentifier">reset_subnet_group_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.resetVpcSecurityGroupIds">reset_vpc_security_group_ids</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_availability_zone` <a name="reset_availability_zone" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.resetAvailabilityZone"></a>

```python
def reset_availability_zone() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_kms_key_arn` <a name="reset_kms_key_arn" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.resetKmsKeyArn"></a>

```python
def reset_kms_key_arn() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_network_type` <a name="reset_network_type" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.resetNetworkType"></a>

```python
def reset_network_type() -> None
```

##### `reset_publicly_accessible` <a name="reset_publicly_accessible" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.resetPubliclyAccessible"></a>

```python
def reset_publicly_accessible() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_subnet_group_identifier` <a name="reset_subnet_group_identifier" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.resetSubnetGroupIdentifier"></a>

```python
def reset_subnet_group_identifier() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_vpc_security_group_ids` <a name="reset_vpc_security_group_ids" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.resetVpcSecurityGroupIds"></a>

```python
def reset_vpc_security_group_ids() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DmsInstanceProfile resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.isConstruct"></a>

```python
from cdktn_provider_aws import dms_instance_profile

dmsInstanceProfile.DmsInstanceProfile.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.isTerraformElement"></a>

```python
from cdktn_provider_aws import dms_instance_profile

dmsInstanceProfile.DmsInstanceProfile.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.isTerraformResource"></a>

```python
from cdktn_provider_aws import dms_instance_profile

dmsInstanceProfile.DmsInstanceProfile.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.generateConfigForImport"></a>

```python
from cdktn_provider_aws import dms_instance_profile

dmsInstanceProfile.DmsInstanceProfile.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DmsInstanceProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DmsInstanceProfile to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DmsInstanceProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_instance_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DmsInstanceProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.property.tagsAll">tags_all</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.property.availabilityZoneInput">availability_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.property.kmsKeyArnInput">kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.property.networkTypeInput">network_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.property.publiclyAccessibleInput">publicly_accessible_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.property.subnetGroupIdentifierInput">subnet_group_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.property.vpcSecurityGroupIdsInput">vpc_security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.property.networkType">network_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.property.publiclyAccessible">publicly_accessible</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.property.subnetGroupIdentifier">subnet_group_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.property.vpcSecurityGroupIds">vpc_security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktn.StringMap

---

##### `availability_zone_input`<sup>Optional</sup> <a name="availability_zone_input" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.property.availabilityZoneInput"></a>

```python
availability_zone_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `kms_key_arn_input`<sup>Optional</sup> <a name="kms_key_arn_input" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.property.kmsKeyArnInput"></a>

```python
kms_key_arn_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_type_input`<sup>Optional</sup> <a name="network_type_input" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.property.networkTypeInput"></a>

```python
network_type_input: str
```

- *Type:* str

---

##### `publicly_accessible_input`<sup>Optional</sup> <a name="publicly_accessible_input" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.property.publiclyAccessibleInput"></a>

```python
publicly_accessible_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `subnet_group_identifier_input`<sup>Optional</sup> <a name="subnet_group_identifier_input" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.property.subnetGroupIdentifierInput"></a>

```python
subnet_group_identifier_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `vpc_security_group_ids_input`<sup>Optional</sup> <a name="vpc_security_group_ids_input" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.property.vpcSecurityGroupIdsInput"></a>

```python
vpc_security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_type`<sup>Required</sup> <a name="network_type" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.property.networkType"></a>

```python
network_type: str
```

- *Type:* str

---

##### `publicly_accessible`<sup>Required</sup> <a name="publicly_accessible" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.property.publiclyAccessible"></a>

```python
publicly_accessible: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `subnet_group_identifier`<sup>Required</sup> <a name="subnet_group_identifier" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.property.subnetGroupIdentifier"></a>

```python
subnet_group_identifier: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `vpc_security_group_ids`<sup>Required</sup> <a name="vpc_security_group_ids" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.property.vpcSecurityGroupIds"></a>

```python
vpc_security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfile.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DmsInstanceProfileConfig <a name="DmsInstanceProfileConfig" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfileConfig.Initializer"></a>

```python
from cdktn_provider_aws import dms_instance_profile

dmsInstanceProfile.DmsInstanceProfileConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  availability_zone: str = None,
  description: str = None,
  kms_key_arn: str = None,
  name: str = None,
  network_type: str = None,
  publicly_accessible: bool | IResolvable = None,
  region: str = None,
  subnet_group_identifier: str = None,
  tags: typing.Mapping[str] = None,
  vpc_security_group_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfileConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfileConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfileConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfileConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfileConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfileConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfileConfig.property.availabilityZone">availability_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_instance_profile#availability_zone DmsInstanceProfile#availability_zone}. |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfileConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_instance_profile#description DmsInstanceProfile#description}. |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfileConfig.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_instance_profile#kms_key_arn DmsInstanceProfile#kms_key_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfileConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_instance_profile#name DmsInstanceProfile#name}. |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfileConfig.property.networkType">network_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_instance_profile#network_type DmsInstanceProfile#network_type}. |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfileConfig.property.publiclyAccessible">publicly_accessible</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_instance_profile#publicly_accessible DmsInstanceProfile#publicly_accessible}. |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfileConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfileConfig.property.subnetGroupIdentifier">subnet_group_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_instance_profile#subnet_group_identifier DmsInstanceProfile#subnet_group_identifier}. |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfileConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_instance_profile#tags DmsInstanceProfile#tags}. |
| <code><a href="#@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfileConfig.property.vpcSecurityGroupIds">vpc_security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_instance_profile#vpc_security_group_ids DmsInstanceProfile#vpc_security_group_ids}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfileConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfileConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfileConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfileConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfileConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfileConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfileConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfileConfig.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_instance_profile#availability_zone DmsInstanceProfile#availability_zone}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfileConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_instance_profile#description DmsInstanceProfile#description}.

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfileConfig.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_instance_profile#kms_key_arn DmsInstanceProfile#kms_key_arn}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfileConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_instance_profile#name DmsInstanceProfile#name}.

---

##### `network_type`<sup>Optional</sup> <a name="network_type" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfileConfig.property.networkType"></a>

```python
network_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_instance_profile#network_type DmsInstanceProfile#network_type}.

---

##### `publicly_accessible`<sup>Optional</sup> <a name="publicly_accessible" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfileConfig.property.publiclyAccessible"></a>

```python
publicly_accessible: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_instance_profile#publicly_accessible DmsInstanceProfile#publicly_accessible}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfileConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_instance_profile#region DmsInstanceProfile#region}

---

##### `subnet_group_identifier`<sup>Optional</sup> <a name="subnet_group_identifier" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfileConfig.property.subnetGroupIdentifier"></a>

```python
subnet_group_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_instance_profile#subnet_group_identifier DmsInstanceProfile#subnet_group_identifier}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfileConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_instance_profile#tags DmsInstanceProfile#tags}.

---

##### `vpc_security_group_ids`<sup>Optional</sup> <a name="vpc_security_group_ids" id="@cdktn/provider-aws.dmsInstanceProfile.DmsInstanceProfileConfig.property.vpcSecurityGroupIds"></a>

```python
vpc_security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_instance_profile#vpc_security_group_ids DmsInstanceProfile#vpc_security_group_ids}.

---




# `securityhubConnectorV2` Submodule <a name="`securityhubConnectorV2` Submodule" id="@cdktn/provider-aws.securityhubConnectorV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityhubConnectorV2 <a name="SecurityhubConnectorV2" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/securityhub_connector_v2 aws_securityhub_connector_v2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer"></a>

```python
from cdktn_provider_aws import securityhub_connector_v2

securityhubConnectorV2.SecurityhubConnectorV2(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  connector_provider: IResolvable | typing.List[SecurityhubConnectorV2ConnectorProvider] = None,
  description: str = None,
  kms_key_arn: str = None,
  region: str = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/securityhub_connector_v2#name SecurityhubConnectorV2#name}. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.connectorProvider">connector_provider</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProvider">SecurityhubConnectorV2ConnectorProvider</a>]</code> | connector_provider block. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/securityhub_connector_v2#description SecurityhubConnectorV2#description}. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/securityhub_connector_v2#kms_key_arn SecurityhubConnectorV2#kms_key_arn}. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/securityhub_connector_v2#tags SecurityhubConnectorV2#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/securityhub_connector_v2#name SecurityhubConnectorV2#name}.

---

##### `connector_provider`<sup>Optional</sup> <a name="connector_provider" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.connectorProvider"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProvider">SecurityhubConnectorV2ConnectorProvider</a>]

connector_provider block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/securityhub_connector_v2#connector_provider SecurityhubConnectorV2#connector_provider}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/securityhub_connector_v2#description SecurityhubConnectorV2#description}.

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.kmsKeyArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/securityhub_connector_v2#kms_key_arn SecurityhubConnectorV2#kms_key_arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/securityhub_connector_v2#region SecurityhubConnectorV2#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/securityhub_connector_v2#tags SecurityhubConnectorV2#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.putConnectorProvider">put_connector_provider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.resetConnectorProvider">reset_connector_provider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.resetKmsKeyArn">reset_kms_key_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_connector_provider` <a name="put_connector_provider" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.putConnectorProvider"></a>

```python
def put_connector_provider(
  value: IResolvable | typing.List[SecurityhubConnectorV2ConnectorProvider]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.putConnectorProvider.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProvider">SecurityhubConnectorV2ConnectorProvider</a>]

---

##### `reset_connector_provider` <a name="reset_connector_provider" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.resetConnectorProvider"></a>

```python
def reset_connector_provider() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_kms_key_arn` <a name="reset_kms_key_arn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.resetKmsKeyArn"></a>

```python
def reset_kms_key_arn() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SecurityhubConnectorV2 resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.isConstruct"></a>

```python
from cdktn_provider_aws import securityhub_connector_v2

securityhubConnectorV2.SecurityhubConnectorV2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.isTerraformElement"></a>

```python
from cdktn_provider_aws import securityhub_connector_v2

securityhubConnectorV2.SecurityhubConnectorV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.isTerraformResource"></a>

```python
from cdktn_provider_aws import securityhub_connector_v2

securityhubConnectorV2.SecurityhubConnectorV2.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.generateConfigForImport"></a>

```python
from cdktn_provider_aws import securityhub_connector_v2

securityhubConnectorV2.SecurityhubConnectorV2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SecurityhubConnectorV2 resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SecurityhubConnectorV2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SecurityhubConnectorV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/securityhub_connector_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SecurityhubConnectorV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.connectorId">connector_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.connectorProvider">connector_provider</a></code> | <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList">SecurityhubConnectorV2ConnectorProviderList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.health">health</a></code> | <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList">SecurityhubConnectorV2HealthList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.tagsAll">tags_all</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.connectorProviderInput">connector_provider_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProvider">SecurityhubConnectorV2ConnectorProvider</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.kmsKeyArnInput">kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `connector_id`<sup>Required</sup> <a name="connector_id" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.connectorId"></a>

```python
connector_id: str
```

- *Type:* str

---

##### `connector_provider`<sup>Required</sup> <a name="connector_provider" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.connectorProvider"></a>

```python
connector_provider: SecurityhubConnectorV2ConnectorProviderList
```

- *Type:* <a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList">SecurityhubConnectorV2ConnectorProviderList</a>

---

##### `health`<sup>Required</sup> <a name="health" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.health"></a>

```python
health: SecurityhubConnectorV2HealthList
```

- *Type:* <a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList">SecurityhubConnectorV2HealthList</a>

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktn.StringMap

---

##### `connector_provider_input`<sup>Optional</sup> <a name="connector_provider_input" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.connectorProviderInput"></a>

```python
connector_provider_input: IResolvable | typing.List[SecurityhubConnectorV2ConnectorProvider]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProvider">SecurityhubConnectorV2ConnectorProvider</a>]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `kms_key_arn_input`<sup>Optional</sup> <a name="kms_key_arn_input" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.kmsKeyArnInput"></a>

```python
kms_key_arn_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityhubConnectorV2Config <a name="SecurityhubConnectorV2Config" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.Initializer"></a>

```python
from cdktn_provider_aws import securityhub_connector_v2

securityhubConnectorV2.SecurityhubConnectorV2Config(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  connector_provider: IResolvable | typing.List[SecurityhubConnectorV2ConnectorProvider] = None,
  description: str = None,
  kms_key_arn: str = None,
  region: str = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/securityhub_connector_v2#name SecurityhubConnectorV2#name}. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.connectorProvider">connector_provider</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProvider">SecurityhubConnectorV2ConnectorProvider</a>]</code> | connector_provider block. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/securityhub_connector_v2#description SecurityhubConnectorV2#description}. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/securityhub_connector_v2#kms_key_arn SecurityhubConnectorV2#kms_key_arn}. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/securityhub_connector_v2#tags SecurityhubConnectorV2#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/securityhub_connector_v2#name SecurityhubConnectorV2#name}.

---

##### `connector_provider`<sup>Optional</sup> <a name="connector_provider" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.connectorProvider"></a>

```python
connector_provider: IResolvable | typing.List[SecurityhubConnectorV2ConnectorProvider]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProvider">SecurityhubConnectorV2ConnectorProvider</a>]

connector_provider block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/securityhub_connector_v2#connector_provider SecurityhubConnectorV2#connector_provider}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/securityhub_connector_v2#description SecurityhubConnectorV2#description}.

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/securityhub_connector_v2#kms_key_arn SecurityhubConnectorV2#kms_key_arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/securityhub_connector_v2#region SecurityhubConnectorV2#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/securityhub_connector_v2#tags SecurityhubConnectorV2#tags}.

---

### SecurityhubConnectorV2ConnectorProvider <a name="SecurityhubConnectorV2ConnectorProvider" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProvider"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProvider.Initializer"></a>

```python
from cdktn_provider_aws import securityhub_connector_v2

securityhubConnectorV2.SecurityhubConnectorV2ConnectorProvider(
  jira_cloud: IResolvable | typing.List[SecurityhubConnectorV2ConnectorProviderJiraCloud] = None,
  service_now: IResolvable | typing.List[SecurityhubConnectorV2ConnectorProviderServiceNow] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProvider.property.jiraCloud">jira_cloud</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloud">SecurityhubConnectorV2ConnectorProviderJiraCloud</a>]</code> | jira_cloud block. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProvider.property.serviceNow">service_now</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNow">SecurityhubConnectorV2ConnectorProviderServiceNow</a>]</code> | service_now block. |

---

##### `jira_cloud`<sup>Optional</sup> <a name="jira_cloud" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProvider.property.jiraCloud"></a>

```python
jira_cloud: IResolvable | typing.List[SecurityhubConnectorV2ConnectorProviderJiraCloud]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloud">SecurityhubConnectorV2ConnectorProviderJiraCloud</a>]

jira_cloud block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/securityhub_connector_v2#jira_cloud SecurityhubConnectorV2#jira_cloud}

---

##### `service_now`<sup>Optional</sup> <a name="service_now" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProvider.property.serviceNow"></a>

```python
service_now: IResolvable | typing.List[SecurityhubConnectorV2ConnectorProviderServiceNow]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNow">SecurityhubConnectorV2ConnectorProviderServiceNow</a>]

service_now block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/securityhub_connector_v2#service_now SecurityhubConnectorV2#service_now}

---

### SecurityhubConnectorV2ConnectorProviderJiraCloud <a name="SecurityhubConnectorV2ConnectorProviderJiraCloud" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloud"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloud.Initializer"></a>

```python
from cdktn_provider_aws import securityhub_connector_v2

securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloud(
  project_key: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloud.property.projectKey">project_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/securityhub_connector_v2#project_key SecurityhubConnectorV2#project_key}. |

---

##### `project_key`<sup>Required</sup> <a name="project_key" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloud.property.projectKey"></a>

```python
project_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/securityhub_connector_v2#project_key SecurityhubConnectorV2#project_key}.

---

### SecurityhubConnectorV2ConnectorProviderServiceNow <a name="SecurityhubConnectorV2ConnectorProviderServiceNow" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNow.Initializer"></a>

```python
from cdktn_provider_aws import securityhub_connector_v2

securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNow(
  instance_name: str,
  secret_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNow.property.instanceName">instance_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/securityhub_connector_v2#instance_name SecurityhubConnectorV2#instance_name}. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNow.property.secretArn">secret_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/securityhub_connector_v2#secret_arn SecurityhubConnectorV2#secret_arn}. |

---

##### `instance_name`<sup>Required</sup> <a name="instance_name" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNow.property.instanceName"></a>

```python
instance_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/securityhub_connector_v2#instance_name SecurityhubConnectorV2#instance_name}.

---

##### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNow.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/securityhub_connector_v2#secret_arn SecurityhubConnectorV2#secret_arn}.

---

### SecurityhubConnectorV2Health <a name="SecurityhubConnectorV2Health" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Health"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Health.Initializer"></a>

```python
from cdktn_provider_aws import securityhub_connector_v2

securityhubConnectorV2.SecurityhubConnectorV2Health()
```


## Classes <a name="Classes" id="Classes"></a>

### SecurityhubConnectorV2ConnectorProviderJiraCloudList <a name="SecurityhubConnectorV2ConnectorProviderJiraCloudList" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.Initializer"></a>

```python
from cdktn_provider_aws import securityhub_connector_v2

securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloud">SecurityhubConnectorV2ConnectorProviderJiraCloud</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SecurityhubConnectorV2ConnectorProviderJiraCloud]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloud">SecurityhubConnectorV2ConnectorProviderJiraCloud</a>]

---


### SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference <a name="SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import securityhub_connector_v2

securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.authStatus">auth_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.authUrl">auth_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.cloudId">cloud_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.projectKeyInput">project_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.projectKey">project_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloud">SecurityhubConnectorV2ConnectorProviderJiraCloud</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auth_status`<sup>Required</sup> <a name="auth_status" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.authStatus"></a>

```python
auth_status: str
```

- *Type:* str

---

##### `auth_url`<sup>Required</sup> <a name="auth_url" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.authUrl"></a>

```python
auth_url: str
```

- *Type:* str

---

##### `cloud_id`<sup>Required</sup> <a name="cloud_id" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.cloudId"></a>

```python
cloud_id: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `project_key_input`<sup>Optional</sup> <a name="project_key_input" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.projectKeyInput"></a>

```python
project_key_input: str
```

- *Type:* str

---

##### `project_key`<sup>Required</sup> <a name="project_key" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.projectKey"></a>

```python
project_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityhubConnectorV2ConnectorProviderJiraCloud
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloud">SecurityhubConnectorV2ConnectorProviderJiraCloud</a>

---


### SecurityhubConnectorV2ConnectorProviderList <a name="SecurityhubConnectorV2ConnectorProviderList" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.Initializer"></a>

```python
from cdktn_provider_aws import securityhub_connector_v2

securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SecurityhubConnectorV2ConnectorProviderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProvider">SecurityhubConnectorV2ConnectorProvider</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SecurityhubConnectorV2ConnectorProvider]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProvider">SecurityhubConnectorV2ConnectorProvider</a>]

---


### SecurityhubConnectorV2ConnectorProviderOutputReference <a name="SecurityhubConnectorV2ConnectorProviderOutputReference" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import securityhub_connector_v2

securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.putJiraCloud">put_jira_cloud</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.putServiceNow">put_service_now</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.resetJiraCloud">reset_jira_cloud</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.resetServiceNow">reset_service_now</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_jira_cloud` <a name="put_jira_cloud" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.putJiraCloud"></a>

```python
def put_jira_cloud(
  value: IResolvable | typing.List[SecurityhubConnectorV2ConnectorProviderJiraCloud]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.putJiraCloud.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloud">SecurityhubConnectorV2ConnectorProviderJiraCloud</a>]

---

##### `put_service_now` <a name="put_service_now" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.putServiceNow"></a>

```python
def put_service_now(
  value: IResolvable | typing.List[SecurityhubConnectorV2ConnectorProviderServiceNow]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.putServiceNow.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNow">SecurityhubConnectorV2ConnectorProviderServiceNow</a>]

---

##### `reset_jira_cloud` <a name="reset_jira_cloud" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.resetJiraCloud"></a>

```python
def reset_jira_cloud() -> None
```

##### `reset_service_now` <a name="reset_service_now" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.resetServiceNow"></a>

```python
def reset_service_now() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.property.jiraCloud">jira_cloud</a></code> | <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList">SecurityhubConnectorV2ConnectorProviderJiraCloudList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.property.serviceNow">service_now</a></code> | <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList">SecurityhubConnectorV2ConnectorProviderServiceNowList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.property.jiraCloudInput">jira_cloud_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloud">SecurityhubConnectorV2ConnectorProviderJiraCloud</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.property.serviceNowInput">service_now_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNow">SecurityhubConnectorV2ConnectorProviderServiceNow</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProvider">SecurityhubConnectorV2ConnectorProvider</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `jira_cloud`<sup>Required</sup> <a name="jira_cloud" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.property.jiraCloud"></a>

```python
jira_cloud: SecurityhubConnectorV2ConnectorProviderJiraCloudList
```

- *Type:* <a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList">SecurityhubConnectorV2ConnectorProviderJiraCloudList</a>

---

##### `service_now`<sup>Required</sup> <a name="service_now" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.property.serviceNow"></a>

```python
service_now: SecurityhubConnectorV2ConnectorProviderServiceNowList
```

- *Type:* <a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList">SecurityhubConnectorV2ConnectorProviderServiceNowList</a>

---

##### `jira_cloud_input`<sup>Optional</sup> <a name="jira_cloud_input" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.property.jiraCloudInput"></a>

```python
jira_cloud_input: IResolvable | typing.List[SecurityhubConnectorV2ConnectorProviderJiraCloud]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloud">SecurityhubConnectorV2ConnectorProviderJiraCloud</a>]

---

##### `service_now_input`<sup>Optional</sup> <a name="service_now_input" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.property.serviceNowInput"></a>

```python
service_now_input: IResolvable | typing.List[SecurityhubConnectorV2ConnectorProviderServiceNow]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNow">SecurityhubConnectorV2ConnectorProviderServiceNow</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityhubConnectorV2ConnectorProvider
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProvider">SecurityhubConnectorV2ConnectorProvider</a>

---


### SecurityhubConnectorV2ConnectorProviderServiceNowList <a name="SecurityhubConnectorV2ConnectorProviderServiceNowList" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.Initializer"></a>

```python
from cdktn_provider_aws import securityhub_connector_v2

securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNow">SecurityhubConnectorV2ConnectorProviderServiceNow</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SecurityhubConnectorV2ConnectorProviderServiceNow]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNow">SecurityhubConnectorV2ConnectorProviderServiceNow</a>]

---


### SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference <a name="SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import securityhub_connector_v2

securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.property.authStatus">auth_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.property.instanceNameInput">instance_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.property.secretArnInput">secret_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.property.instanceName">instance_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.property.secretArn">secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNow">SecurityhubConnectorV2ConnectorProviderServiceNow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auth_status`<sup>Required</sup> <a name="auth_status" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.property.authStatus"></a>

```python
auth_status: str
```

- *Type:* str

---

##### `instance_name_input`<sup>Optional</sup> <a name="instance_name_input" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.property.instanceNameInput"></a>

```python
instance_name_input: str
```

- *Type:* str

---

##### `secret_arn_input`<sup>Optional</sup> <a name="secret_arn_input" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.property.secretArnInput"></a>

```python
secret_arn_input: str
```

- *Type:* str

---

##### `instance_name`<sup>Required</sup> <a name="instance_name" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.property.instanceName"></a>

```python
instance_name: str
```

- *Type:* str

---

##### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityhubConnectorV2ConnectorProviderServiceNow
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNow">SecurityhubConnectorV2ConnectorProviderServiceNow</a>

---


### SecurityhubConnectorV2HealthList <a name="SecurityhubConnectorV2HealthList" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.Initializer"></a>

```python
from cdktn_provider_aws import securityhub_connector_v2

securityhubConnectorV2.SecurityhubConnectorV2HealthList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SecurityhubConnectorV2HealthOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### SecurityhubConnectorV2HealthOutputReference <a name="SecurityhubConnectorV2HealthOutputReference" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import securityhub_connector_v2

securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.property.connectorStatus">connector_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.property.lastCheckedAt">last_checked_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Health">SecurityhubConnectorV2Health</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connector_status`<sup>Required</sup> <a name="connector_status" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.property.connectorStatus"></a>

```python
connector_status: str
```

- *Type:* str

---

##### `last_checked_at`<sup>Required</sup> <a name="last_checked_at" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.property.lastCheckedAt"></a>

```python
last_checked_at: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.property.internalValue"></a>

```python
internal_value: SecurityhubConnectorV2Health
```

- *Type:* <a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Health">SecurityhubConnectorV2Health</a>

---




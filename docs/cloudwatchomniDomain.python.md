# `cloudwatchomniDomain` Submodule <a name="`cloudwatchomniDomain` Submodule" id="@cdktn/provider-aws.cloudwatchomniDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchomniDomain <a name="CloudwatchomniDomain" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/cloudwatchomni_domain aws_cloudwatchomni_domain}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.Initializer"></a>

```python
from cdktn_provider_aws import cloudwatchomni_domain

cloudwatchomniDomain.CloudwatchomniDomain(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  identity_providers: typing.List[str],
  name: str,
  identity_provider_configuration: IResolvable | typing.List[CloudwatchomniDomainIdentityProviderConfiguration] = None,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.Initializer.parameter.identityProviders">identity_providers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/cloudwatchomni_domain#identity_providers CloudwatchomniDomain#identity_providers}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/cloudwatchomni_domain#name CloudwatchomniDomain#name}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.Initializer.parameter.identityProviderConfiguration">identity_provider_configuration</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfiguration">CloudwatchomniDomainIdentityProviderConfiguration</a>]</code> | identity_provider_configuration block. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `identity_providers`<sup>Required</sup> <a name="identity_providers" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.Initializer.parameter.identityProviders"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/cloudwatchomni_domain#identity_providers CloudwatchomniDomain#identity_providers}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/cloudwatchomni_domain#name CloudwatchomniDomain#name}.

---

##### `identity_provider_configuration`<sup>Optional</sup> <a name="identity_provider_configuration" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.Initializer.parameter.identityProviderConfiguration"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfiguration">CloudwatchomniDomainIdentityProviderConfiguration</a>]

identity_provider_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/cloudwatchomni_domain#identity_provider_configuration CloudwatchomniDomain#identity_provider_configuration}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/cloudwatchomni_domain#region CloudwatchomniDomain#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.putIdentityProviderConfiguration">put_identity_provider_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.resetIdentityProviderConfiguration">reset_identity_provider_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_identity_provider_configuration` <a name="put_identity_provider_configuration" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.putIdentityProviderConfiguration"></a>

```python
def put_identity_provider_configuration(
  value: IResolvable | typing.List[CloudwatchomniDomainIdentityProviderConfiguration]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.putIdentityProviderConfiguration.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfiguration">CloudwatchomniDomainIdentityProviderConfiguration</a>]

---

##### `reset_identity_provider_configuration` <a name="reset_identity_provider_configuration" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.resetIdentityProviderConfiguration"></a>

```python
def reset_identity_provider_configuration() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CloudwatchomniDomain resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.isConstruct"></a>

```python
from cdktn_provider_aws import cloudwatchomni_domain

cloudwatchomniDomain.CloudwatchomniDomain.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.isTerraformElement"></a>

```python
from cdktn_provider_aws import cloudwatchomni_domain

cloudwatchomniDomain.CloudwatchomniDomain.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.isTerraformResource"></a>

```python
from cdktn_provider_aws import cloudwatchomni_domain

cloudwatchomniDomain.CloudwatchomniDomain.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.generateConfigForImport"></a>

```python
from cdktn_provider_aws import cloudwatchomni_domain

cloudwatchomniDomain.CloudwatchomniDomain.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CloudwatchomniDomain resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CloudwatchomniDomain to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CloudwatchomniDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/cloudwatchomni_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudwatchomniDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.property.customEndpointUrls">custom_endpoint_urls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.property.domainEndpointUrl">domain_endpoint_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.property.domainId">domain_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.property.identityCenterApplicationArn">identity_center_application_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.property.identityProviderConfiguration">identity_provider_configuration</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationList">CloudwatchomniDomainIdentityProviderConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.property.identityProviderConfigurationInput">identity_provider_configuration_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfiguration">CloudwatchomniDomainIdentityProviderConfiguration</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.property.identityProvidersInput">identity_providers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.property.identityProviders">identity_providers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `custom_endpoint_urls`<sup>Required</sup> <a name="custom_endpoint_urls" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.property.customEndpointUrls"></a>

```python
custom_endpoint_urls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `domain_endpoint_url`<sup>Required</sup> <a name="domain_endpoint_url" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.property.domainEndpointUrl"></a>

```python
domain_endpoint_url: str
```

- *Type:* str

---

##### `domain_id`<sup>Required</sup> <a name="domain_id" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.property.domainId"></a>

```python
domain_id: str
```

- *Type:* str

---

##### `identity_center_application_arn`<sup>Required</sup> <a name="identity_center_application_arn" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.property.identityCenterApplicationArn"></a>

```python
identity_center_application_arn: str
```

- *Type:* str

---

##### `identity_provider_configuration`<sup>Required</sup> <a name="identity_provider_configuration" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.property.identityProviderConfiguration"></a>

```python
identity_provider_configuration: CloudwatchomniDomainIdentityProviderConfigurationList
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationList">CloudwatchomniDomainIdentityProviderConfigurationList</a>

---

##### `identity_provider_configuration_input`<sup>Optional</sup> <a name="identity_provider_configuration_input" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.property.identityProviderConfigurationInput"></a>

```python
identity_provider_configuration_input: IResolvable | typing.List[CloudwatchomniDomainIdentityProviderConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfiguration">CloudwatchomniDomainIdentityProviderConfiguration</a>]

---

##### `identity_providers_input`<sup>Optional</sup> <a name="identity_providers_input" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.property.identityProvidersInput"></a>

```python
identity_providers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `identity_providers`<sup>Required</sup> <a name="identity_providers" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.property.identityProviders"></a>

```python
identity_providers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomain.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchomniDomainConfig <a name="CloudwatchomniDomainConfig" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainConfig.Initializer"></a>

```python
from cdktn_provider_aws import cloudwatchomni_domain

cloudwatchomniDomain.CloudwatchomniDomainConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  identity_providers: typing.List[str],
  name: str,
  identity_provider_configuration: IResolvable | typing.List[CloudwatchomniDomainIdentityProviderConfiguration] = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainConfig.property.identityProviders">identity_providers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/cloudwatchomni_domain#identity_providers CloudwatchomniDomain#identity_providers}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/cloudwatchomni_domain#name CloudwatchomniDomain#name}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainConfig.property.identityProviderConfiguration">identity_provider_configuration</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfiguration">CloudwatchomniDomainIdentityProviderConfiguration</a>]</code> | identity_provider_configuration block. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `identity_providers`<sup>Required</sup> <a name="identity_providers" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainConfig.property.identityProviders"></a>

```python
identity_providers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/cloudwatchomni_domain#identity_providers CloudwatchomniDomain#identity_providers}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/cloudwatchomni_domain#name CloudwatchomniDomain#name}.

---

##### `identity_provider_configuration`<sup>Optional</sup> <a name="identity_provider_configuration" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainConfig.property.identityProviderConfiguration"></a>

```python
identity_provider_configuration: IResolvable | typing.List[CloudwatchomniDomainIdentityProviderConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfiguration">CloudwatchomniDomainIdentityProviderConfiguration</a>]

identity_provider_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/cloudwatchomni_domain#identity_provider_configuration CloudwatchomniDomain#identity_provider_configuration}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/cloudwatchomni_domain#region CloudwatchomniDomain#region}

---

### CloudwatchomniDomainIdentityProviderConfiguration <a name="CloudwatchomniDomainIdentityProviderConfiguration" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfiguration.Initializer"></a>

```python
from cdktn_provider_aws import cloudwatchomni_domain

cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfiguration(
  identity_center_configuration: IResolvable | typing.List[CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfiguration] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfiguration.property.identityCenterConfiguration">identity_center_configuration</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfiguration">CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfiguration</a>]</code> | identity_center_configuration block. |

---

##### `identity_center_configuration`<sup>Optional</sup> <a name="identity_center_configuration" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfiguration.property.identityCenterConfiguration"></a>

```python
identity_center_configuration: IResolvable | typing.List[CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfiguration">CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfiguration</a>]

identity_center_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/cloudwatchomni_domain#identity_center_configuration CloudwatchomniDomain#identity_center_configuration}

---

### CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfiguration <a name="CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfiguration" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfiguration.Initializer"></a>

```python
from cdktn_provider_aws import cloudwatchomni_domain

cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfiguration(
  identity_center_instance_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfiguration.property.identityCenterInstanceArn">identity_center_instance_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/cloudwatchomni_domain#identity_center_instance_arn CloudwatchomniDomain#identity_center_instance_arn}. |

---

##### `identity_center_instance_arn`<sup>Required</sup> <a name="identity_center_instance_arn" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfiguration.property.identityCenterInstanceArn"></a>

```python
identity_center_instance_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/cloudwatchomni_domain#identity_center_instance_arn CloudwatchomniDomain#identity_center_instance_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationList <a name="CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationList" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationList.Initializer"></a>

```python
from cdktn_provider_aws import cloudwatchomni_domain

cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfiguration">CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfiguration">CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfiguration</a>]

---


### CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference <a name="CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import cloudwatchomni_domain

cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.property.identityCenterInstanceArnInput">identity_center_instance_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.property.identityCenterInstanceArn">identity_center_instance_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfiguration">CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identity_center_instance_arn_input`<sup>Optional</sup> <a name="identity_center_instance_arn_input" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.property.identityCenterInstanceArnInput"></a>

```python
identity_center_instance_arn_input: str
```

- *Type:* str

---

##### `identity_center_instance_arn`<sup>Required</sup> <a name="identity_center_instance_arn" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.property.identityCenterInstanceArn"></a>

```python
identity_center_instance_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfiguration">CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfiguration</a>

---


### CloudwatchomniDomainIdentityProviderConfigurationList <a name="CloudwatchomniDomainIdentityProviderConfigurationList" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationList.Initializer"></a>

```python
from cdktn_provider_aws import cloudwatchomni_domain

cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudwatchomniDomainIdentityProviderConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfiguration">CloudwatchomniDomainIdentityProviderConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CloudwatchomniDomainIdentityProviderConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfiguration">CloudwatchomniDomainIdentityProviderConfiguration</a>]

---


### CloudwatchomniDomainIdentityProviderConfigurationOutputReference <a name="CloudwatchomniDomainIdentityProviderConfigurationOutputReference" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import cloudwatchomni_domain

cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationOutputReference.putIdentityCenterConfiguration">put_identity_center_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationOutputReference.resetIdentityCenterConfiguration">reset_identity_center_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_identity_center_configuration` <a name="put_identity_center_configuration" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationOutputReference.putIdentityCenterConfiguration"></a>

```python
def put_identity_center_configuration(
  value: IResolvable | typing.List[CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfiguration]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationOutputReference.putIdentityCenterConfiguration.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfiguration">CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfiguration</a>]

---

##### `reset_identity_center_configuration` <a name="reset_identity_center_configuration" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationOutputReference.resetIdentityCenterConfiguration"></a>

```python
def reset_identity_center_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationOutputReference.property.identityCenterConfiguration">identity_center_configuration</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationList">CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationOutputReference.property.identityCenterConfigurationInput">identity_center_configuration_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfiguration">CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfiguration</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfiguration">CloudwatchomniDomainIdentityProviderConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identity_center_configuration`<sup>Required</sup> <a name="identity_center_configuration" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationOutputReference.property.identityCenterConfiguration"></a>

```python
identity_center_configuration: CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationList
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationList">CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationList</a>

---

##### `identity_center_configuration_input`<sup>Optional</sup> <a name="identity_center_configuration_input" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationOutputReference.property.identityCenterConfigurationInput"></a>

```python
identity_center_configuration_input: IResolvable | typing.List[CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfiguration">CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfiguration</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudwatchomniDomainIdentityProviderConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniDomain.CloudwatchomniDomainIdentityProviderConfiguration">CloudwatchomniDomainIdentityProviderConfiguration</a>

---




# `redshiftNamespaceRegistration` Submodule <a name="`redshiftNamespaceRegistration` Submodule" id="@cdktn/provider-aws.redshiftNamespaceRegistration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftNamespaceRegistration <a name="RedshiftNamespaceRegistration" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/redshift_namespace_registration aws_redshift_namespace_registration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer"></a>

```python
from cdktn_provider_aws import redshift_namespace_registration

redshiftNamespaceRegistration.RedshiftNamespaceRegistration(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  consumer_identifier: str,
  namespace_type: str,
  provisioned_cluster_identifier: str = None,
  region: str = None,
  serverless_namespace_identifier: str = None,
  serverless_workgroup_identifier: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer.parameter.consumerIdentifier">consumer_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/redshift_namespace_registration#consumer_identifier RedshiftNamespaceRegistration#consumer_identifier}. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer.parameter.namespaceType">namespace_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/redshift_namespace_registration#namespace_type RedshiftNamespaceRegistration#namespace_type}. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer.parameter.provisionedClusterIdentifier">provisioned_cluster_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/redshift_namespace_registration#provisioned_cluster_identifier RedshiftNamespaceRegistration#provisioned_cluster_identifier}. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer.parameter.serverlessNamespaceIdentifier">serverless_namespace_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/redshift_namespace_registration#serverless_namespace_identifier RedshiftNamespaceRegistration#serverless_namespace_identifier}. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer.parameter.serverlessWorkgroupIdentifier">serverless_workgroup_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/redshift_namespace_registration#serverless_workgroup_identifier RedshiftNamespaceRegistration#serverless_workgroup_identifier}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `consumer_identifier`<sup>Required</sup> <a name="consumer_identifier" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer.parameter.consumerIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/redshift_namespace_registration#consumer_identifier RedshiftNamespaceRegistration#consumer_identifier}.

---

##### `namespace_type`<sup>Required</sup> <a name="namespace_type" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer.parameter.namespaceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/redshift_namespace_registration#namespace_type RedshiftNamespaceRegistration#namespace_type}.

---

##### `provisioned_cluster_identifier`<sup>Optional</sup> <a name="provisioned_cluster_identifier" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer.parameter.provisionedClusterIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/redshift_namespace_registration#provisioned_cluster_identifier RedshiftNamespaceRegistration#provisioned_cluster_identifier}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/redshift_namespace_registration#region RedshiftNamespaceRegistration#region}

---

##### `serverless_namespace_identifier`<sup>Optional</sup> <a name="serverless_namespace_identifier" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer.parameter.serverlessNamespaceIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/redshift_namespace_registration#serverless_namespace_identifier RedshiftNamespaceRegistration#serverless_namespace_identifier}.

---

##### `serverless_workgroup_identifier`<sup>Optional</sup> <a name="serverless_workgroup_identifier" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer.parameter.serverlessWorkgroupIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/redshift_namespace_registration#serverless_workgroup_identifier RedshiftNamespaceRegistration#serverless_workgroup_identifier}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.resetProvisionedClusterIdentifier">reset_provisioned_cluster_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.resetServerlessNamespaceIdentifier">reset_serverless_namespace_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.resetServerlessWorkgroupIdentifier">reset_serverless_workgroup_identifier</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_provisioned_cluster_identifier` <a name="reset_provisioned_cluster_identifier" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.resetProvisionedClusterIdentifier"></a>

```python
def reset_provisioned_cluster_identifier() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_serverless_namespace_identifier` <a name="reset_serverless_namespace_identifier" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.resetServerlessNamespaceIdentifier"></a>

```python
def reset_serverless_namespace_identifier() -> None
```

##### `reset_serverless_workgroup_identifier` <a name="reset_serverless_workgroup_identifier" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.resetServerlessWorkgroupIdentifier"></a>

```python
def reset_serverless_workgroup_identifier() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a RedshiftNamespaceRegistration resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.isConstruct"></a>

```python
from cdktn_provider_aws import redshift_namespace_registration

redshiftNamespaceRegistration.RedshiftNamespaceRegistration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.isTerraformElement"></a>

```python
from cdktn_provider_aws import redshift_namespace_registration

redshiftNamespaceRegistration.RedshiftNamespaceRegistration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.isTerraformResource"></a>

```python
from cdktn_provider_aws import redshift_namespace_registration

redshiftNamespaceRegistration.RedshiftNamespaceRegistration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.generateConfigForImport"></a>

```python
from cdktn_provider_aws import redshift_namespace_registration

redshiftNamespaceRegistration.RedshiftNamespaceRegistration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a RedshiftNamespaceRegistration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the RedshiftNamespaceRegistration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing RedshiftNamespaceRegistration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/redshift_namespace_registration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the RedshiftNamespaceRegistration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.consumerIdentifierInput">consumer_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.namespaceTypeInput">namespace_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.provisionedClusterIdentifierInput">provisioned_cluster_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.serverlessNamespaceIdentifierInput">serverless_namespace_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.serverlessWorkgroupIdentifierInput">serverless_workgroup_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.consumerIdentifier">consumer_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.namespaceType">namespace_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.provisionedClusterIdentifier">provisioned_cluster_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.serverlessNamespaceIdentifier">serverless_namespace_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.serverlessWorkgroupIdentifier">serverless_workgroup_identifier</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `consumer_identifier_input`<sup>Optional</sup> <a name="consumer_identifier_input" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.consumerIdentifierInput"></a>

```python
consumer_identifier_input: str
```

- *Type:* str

---

##### `namespace_type_input`<sup>Optional</sup> <a name="namespace_type_input" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.namespaceTypeInput"></a>

```python
namespace_type_input: str
```

- *Type:* str

---

##### `provisioned_cluster_identifier_input`<sup>Optional</sup> <a name="provisioned_cluster_identifier_input" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.provisionedClusterIdentifierInput"></a>

```python
provisioned_cluster_identifier_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `serverless_namespace_identifier_input`<sup>Optional</sup> <a name="serverless_namespace_identifier_input" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.serverlessNamespaceIdentifierInput"></a>

```python
serverless_namespace_identifier_input: str
```

- *Type:* str

---

##### `serverless_workgroup_identifier_input`<sup>Optional</sup> <a name="serverless_workgroup_identifier_input" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.serverlessWorkgroupIdentifierInput"></a>

```python
serverless_workgroup_identifier_input: str
```

- *Type:* str

---

##### `consumer_identifier`<sup>Required</sup> <a name="consumer_identifier" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.consumerIdentifier"></a>

```python
consumer_identifier: str
```

- *Type:* str

---

##### `namespace_type`<sup>Required</sup> <a name="namespace_type" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.namespaceType"></a>

```python
namespace_type: str
```

- *Type:* str

---

##### `provisioned_cluster_identifier`<sup>Required</sup> <a name="provisioned_cluster_identifier" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.provisionedClusterIdentifier"></a>

```python
provisioned_cluster_identifier: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `serverless_namespace_identifier`<sup>Required</sup> <a name="serverless_namespace_identifier" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.serverlessNamespaceIdentifier"></a>

```python
serverless_namespace_identifier: str
```

- *Type:* str

---

##### `serverless_workgroup_identifier`<sup>Required</sup> <a name="serverless_workgroup_identifier" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.serverlessWorkgroupIdentifier"></a>

```python
serverless_workgroup_identifier: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftNamespaceRegistrationConfig <a name="RedshiftNamespaceRegistrationConfig" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.Initializer"></a>

```python
from cdktn_provider_aws import redshift_namespace_registration

redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  consumer_identifier: str,
  namespace_type: str,
  provisioned_cluster_identifier: str = None,
  region: str = None,
  serverless_namespace_identifier: str = None,
  serverless_workgroup_identifier: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.consumerIdentifier">consumer_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/redshift_namespace_registration#consumer_identifier RedshiftNamespaceRegistration#consumer_identifier}. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.namespaceType">namespace_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/redshift_namespace_registration#namespace_type RedshiftNamespaceRegistration#namespace_type}. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.provisionedClusterIdentifier">provisioned_cluster_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/redshift_namespace_registration#provisioned_cluster_identifier RedshiftNamespaceRegistration#provisioned_cluster_identifier}. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.serverlessNamespaceIdentifier">serverless_namespace_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/redshift_namespace_registration#serverless_namespace_identifier RedshiftNamespaceRegistration#serverless_namespace_identifier}. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.serverlessWorkgroupIdentifier">serverless_workgroup_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/redshift_namespace_registration#serverless_workgroup_identifier RedshiftNamespaceRegistration#serverless_workgroup_identifier}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `consumer_identifier`<sup>Required</sup> <a name="consumer_identifier" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.consumerIdentifier"></a>

```python
consumer_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/redshift_namespace_registration#consumer_identifier RedshiftNamespaceRegistration#consumer_identifier}.

---

##### `namespace_type`<sup>Required</sup> <a name="namespace_type" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.namespaceType"></a>

```python
namespace_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/redshift_namespace_registration#namespace_type RedshiftNamespaceRegistration#namespace_type}.

---

##### `provisioned_cluster_identifier`<sup>Optional</sup> <a name="provisioned_cluster_identifier" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.provisionedClusterIdentifier"></a>

```python
provisioned_cluster_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/redshift_namespace_registration#provisioned_cluster_identifier RedshiftNamespaceRegistration#provisioned_cluster_identifier}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/redshift_namespace_registration#region RedshiftNamespaceRegistration#region}

---

##### `serverless_namespace_identifier`<sup>Optional</sup> <a name="serverless_namespace_identifier" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.serverlessNamespaceIdentifier"></a>

```python
serverless_namespace_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/redshift_namespace_registration#serverless_namespace_identifier RedshiftNamespaceRegistration#serverless_namespace_identifier}.

---

##### `serverless_workgroup_identifier`<sup>Optional</sup> <a name="serverless_workgroup_identifier" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.serverlessWorkgroupIdentifier"></a>

```python
serverless_workgroup_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/redshift_namespace_registration#serverless_workgroup_identifier RedshiftNamespaceRegistration#serverless_workgroup_identifier}.

---




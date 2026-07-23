# `dataAwsElasticacheServiceUpdateActions` Submodule <a name="`dataAwsElasticacheServiceUpdateActions` Submodule" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsElasticacheServiceUpdateActions <a name="DataAwsElasticacheServiceUpdateActions" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/elasticache_service_update_actions aws_elasticache_service_update_actions}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_elasticache_service_update_actions

dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  cache_cluster_id: str = None,
  region: str = None,
  replication_group_id: str = None,
  service_update_status: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.Initializer.parameter.cacheClusterId">cache_cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/elasticache_service_update_actions#cache_cluster_id DataAwsElasticacheServiceUpdateActions#cache_cluster_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.Initializer.parameter.replicationGroupId">replication_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/elasticache_service_update_actions#replication_group_id DataAwsElasticacheServiceUpdateActions#replication_group_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.Initializer.parameter.serviceUpdateStatus">service_update_status</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/elasticache_service_update_actions#service_update_status DataAwsElasticacheServiceUpdateActions#service_update_status}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `cache_cluster_id`<sup>Optional</sup> <a name="cache_cluster_id" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.Initializer.parameter.cacheClusterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/elasticache_service_update_actions#cache_cluster_id DataAwsElasticacheServiceUpdateActions#cache_cluster_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/elasticache_service_update_actions#region DataAwsElasticacheServiceUpdateActions#region}

---

##### `replication_group_id`<sup>Optional</sup> <a name="replication_group_id" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.Initializer.parameter.replicationGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/elasticache_service_update_actions#replication_group_id DataAwsElasticacheServiceUpdateActions#replication_group_id}.

---

##### `service_update_status`<sup>Optional</sup> <a name="service_update_status" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.Initializer.parameter.serviceUpdateStatus"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/elasticache_service_update_actions#service_update_status DataAwsElasticacheServiceUpdateActions#service_update_status}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.resetCacheClusterId">reset_cache_cluster_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.resetReplicationGroupId">reset_replication_group_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.resetServiceUpdateStatus">reset_service_update_status</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_cache_cluster_id` <a name="reset_cache_cluster_id" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.resetCacheClusterId"></a>

```python
def reset_cache_cluster_id() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_replication_group_id` <a name="reset_replication_group_id" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.resetReplicationGroupId"></a>

```python
def reset_replication_group_id() -> None
```

##### `reset_service_update_status` <a name="reset_service_update_status" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.resetServiceUpdateStatus"></a>

```python
def reset_service_update_status() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsElasticacheServiceUpdateActions resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.isConstruct"></a>

```python
from cdktn_provider_aws import data_aws_elasticache_service_update_actions

dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.isTerraformElement"></a>

```python
from cdktn_provider_aws import data_aws_elasticache_service_update_actions

dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.isTerraformDataSource"></a>

```python
from cdktn_provider_aws import data_aws_elasticache_service_update_actions

dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.generateConfigForImport"></a>

```python
from cdktn_provider_aws import data_aws_elasticache_service_update_actions

dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsElasticacheServiceUpdateActions resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsElasticacheServiceUpdateActions to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsElasticacheServiceUpdateActions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/elasticache_service_update_actions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsElasticacheServiceUpdateActions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.updateActions">update_actions</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList">DataAwsElasticacheServiceUpdateActionsUpdateActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.cacheClusterIdInput">cache_cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.replicationGroupIdInput">replication_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.serviceUpdateStatusInput">service_update_status_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.cacheClusterId">cache_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.replicationGroupId">replication_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.serviceUpdateStatus">service_update_status</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `update_actions`<sup>Required</sup> <a name="update_actions" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.updateActions"></a>

```python
update_actions: DataAwsElasticacheServiceUpdateActionsUpdateActionsList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList">DataAwsElasticacheServiceUpdateActionsUpdateActionsList</a>

---

##### `cache_cluster_id_input`<sup>Optional</sup> <a name="cache_cluster_id_input" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.cacheClusterIdInput"></a>

```python
cache_cluster_id_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `replication_group_id_input`<sup>Optional</sup> <a name="replication_group_id_input" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.replicationGroupIdInput"></a>

```python
replication_group_id_input: str
```

- *Type:* str

---

##### `service_update_status_input`<sup>Optional</sup> <a name="service_update_status_input" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.serviceUpdateStatusInput"></a>

```python
service_update_status_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cache_cluster_id`<sup>Required</sup> <a name="cache_cluster_id" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.cacheClusterId"></a>

```python
cache_cluster_id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `replication_group_id`<sup>Required</sup> <a name="replication_group_id" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.replicationGroupId"></a>

```python
replication_group_id: str
```

- *Type:* str

---

##### `service_update_status`<sup>Required</sup> <a name="service_update_status" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.serviceUpdateStatus"></a>

```python
service_update_status: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsElasticacheServiceUpdateActionsConfig <a name="DataAwsElasticacheServiceUpdateActionsConfig" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsConfig.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_elasticache_service_update_actions

dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  cache_cluster_id: str = None,
  region: str = None,
  replication_group_id: str = None,
  service_update_status: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsConfig.property.cacheClusterId">cache_cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/elasticache_service_update_actions#cache_cluster_id DataAwsElasticacheServiceUpdateActions#cache_cluster_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsConfig.property.replicationGroupId">replication_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/elasticache_service_update_actions#replication_group_id DataAwsElasticacheServiceUpdateActions#replication_group_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsConfig.property.serviceUpdateStatus">service_update_status</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/elasticache_service_update_actions#service_update_status DataAwsElasticacheServiceUpdateActions#service_update_status}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `cache_cluster_id`<sup>Optional</sup> <a name="cache_cluster_id" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsConfig.property.cacheClusterId"></a>

```python
cache_cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/elasticache_service_update_actions#cache_cluster_id DataAwsElasticacheServiceUpdateActions#cache_cluster_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/elasticache_service_update_actions#region DataAwsElasticacheServiceUpdateActions#region}

---

##### `replication_group_id`<sup>Optional</sup> <a name="replication_group_id" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsConfig.property.replicationGroupId"></a>

```python
replication_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/elasticache_service_update_actions#replication_group_id DataAwsElasticacheServiceUpdateActions#replication_group_id}.

---

##### `service_update_status`<sup>Optional</sup> <a name="service_update_status" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsConfig.property.serviceUpdateStatus"></a>

```python
service_update_status: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/elasticache_service_update_actions#service_update_status DataAwsElasticacheServiceUpdateActions#service_update_status}.

---

### DataAwsElasticacheServiceUpdateActionsUpdateActions <a name="DataAwsElasticacheServiceUpdateActionsUpdateActions" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActions.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_elasticache_service_update_actions

dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActions()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsElasticacheServiceUpdateActionsUpdateActionsList <a name="DataAwsElasticacheServiceUpdateActionsUpdateActionsList" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_elasticache_service_update_actions

dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference <a name="DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_elasticache_service_update_actions

dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.cacheClusterId">cache_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.engine">engine</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.estimatedUpdateTime">estimated_update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.recommendedApplyByDate">recommended_apply_by_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.releaseDate">release_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.replicationGroupId">replication_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.serviceUpdateName">service_update_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.serviceUpdateSeverity">service_update_severity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.serviceUpdateStatus">service_update_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.serviceUpdateType">service_update_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.updateActionStatus">update_action_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActions">DataAwsElasticacheServiceUpdateActionsUpdateActions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cache_cluster_id`<sup>Required</sup> <a name="cache_cluster_id" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.cacheClusterId"></a>

```python
cache_cluster_id: str
```

- *Type:* str

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.engine"></a>

```python
engine: str
```

- *Type:* str

---

##### `estimated_update_time`<sup>Required</sup> <a name="estimated_update_time" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.estimatedUpdateTime"></a>

```python
estimated_update_time: str
```

- *Type:* str

---

##### `recommended_apply_by_date`<sup>Required</sup> <a name="recommended_apply_by_date" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.recommendedApplyByDate"></a>

```python
recommended_apply_by_date: str
```

- *Type:* str

---

##### `release_date`<sup>Required</sup> <a name="release_date" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.releaseDate"></a>

```python
release_date: str
```

- *Type:* str

---

##### `replication_group_id`<sup>Required</sup> <a name="replication_group_id" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.replicationGroupId"></a>

```python
replication_group_id: str
```

- *Type:* str

---

##### `service_update_name`<sup>Required</sup> <a name="service_update_name" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.serviceUpdateName"></a>

```python
service_update_name: str
```

- *Type:* str

---

##### `service_update_severity`<sup>Required</sup> <a name="service_update_severity" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.serviceUpdateSeverity"></a>

```python
service_update_severity: str
```

- *Type:* str

---

##### `service_update_status`<sup>Required</sup> <a name="service_update_status" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.serviceUpdateStatus"></a>

```python
service_update_status: str
```

- *Type:* str

---

##### `service_update_type`<sup>Required</sup> <a name="service_update_type" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.serviceUpdateType"></a>

```python
service_update_type: str
```

- *Type:* str

---

##### `update_action_status`<sup>Required</sup> <a name="update_action_status" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.updateActionStatus"></a>

```python
update_action_status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsElasticacheServiceUpdateActionsUpdateActions
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActions">DataAwsElasticacheServiceUpdateActionsUpdateActions</a>

---




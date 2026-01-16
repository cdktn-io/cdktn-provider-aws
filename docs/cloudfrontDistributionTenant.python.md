# `cloudfrontDistributionTenant` Submodule <a name="`cloudfrontDistributionTenant` Submodule" id="@cdktn/provider-aws.cloudfrontDistributionTenant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudfrontDistributionTenant <a name="CloudfrontDistributionTenant" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant aws_cloudfront_distribution_tenant}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer"></a>

```python
from cdktn_provider_aws import cloudfront_distribution_tenant

cloudfrontDistributionTenant.CloudfrontDistributionTenant(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  distribution_id: str,
  name: str,
  connection_group_id: str = None,
  customizations: IResolvable | typing.List[CloudfrontDistributionTenantCustomizations] = None,
  domain: IResolvable | typing.List[CloudfrontDistributionTenantDomain] = None,
  enabled: bool | IResolvable = None,
  managed_certificate_request: IResolvable | typing.List[CloudfrontDistributionTenantManagedCertificateRequest] = None,
  parameter: IResolvable | typing.List[CloudfrontDistributionTenantParameter] = None,
  tags: typing.Mapping[str] = None,
  timeouts: CloudfrontDistributionTenantTimeouts = None,
  wait_for_deployment: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.distributionId">distribution_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#distribution_id CloudfrontDistributionTenant#distribution_id}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#name CloudfrontDistributionTenant#name}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.connectionGroupId">connection_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#connection_group_id CloudfrontDistributionTenant#connection_group_id}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.customizations">customizations</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizations">CloudfrontDistributionTenantCustomizations</a>]</code> | customizations block. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.domain">domain</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomain">CloudfrontDistributionTenantDomain</a>]</code> | domain block. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#enabled CloudfrontDistributionTenant#enabled}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.managedCertificateRequest">managed_certificate_request</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequest">CloudfrontDistributionTenantManagedCertificateRequest</a>]</code> | managed_certificate_request block. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.parameter">parameter</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameter">CloudfrontDistributionTenantParameter</a>]</code> | parameter block. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#tags CloudfrontDistributionTenant#tags}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeouts">CloudfrontDistributionTenantTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.waitForDeployment">wait_for_deployment</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#wait_for_deployment CloudfrontDistributionTenant#wait_for_deployment}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `distribution_id`<sup>Required</sup> <a name="distribution_id" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.distributionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#distribution_id CloudfrontDistributionTenant#distribution_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#name CloudfrontDistributionTenant#name}.

---

##### `connection_group_id`<sup>Optional</sup> <a name="connection_group_id" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.connectionGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#connection_group_id CloudfrontDistributionTenant#connection_group_id}.

---

##### `customizations`<sup>Optional</sup> <a name="customizations" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.customizations"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizations">CloudfrontDistributionTenantCustomizations</a>]

customizations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#customizations CloudfrontDistributionTenant#customizations}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.domain"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomain">CloudfrontDistributionTenantDomain</a>]

domain block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#domain CloudfrontDistributionTenant#domain}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.enabled"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#enabled CloudfrontDistributionTenant#enabled}.

---

##### `managed_certificate_request`<sup>Optional</sup> <a name="managed_certificate_request" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.managedCertificateRequest"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequest">CloudfrontDistributionTenantManagedCertificateRequest</a>]

managed_certificate_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#managed_certificate_request CloudfrontDistributionTenant#managed_certificate_request}

---

##### `parameter`<sup>Optional</sup> <a name="parameter" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.parameter"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameter">CloudfrontDistributionTenantParameter</a>]

parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#parameter CloudfrontDistributionTenant#parameter}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#tags CloudfrontDistributionTenant#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeouts">CloudfrontDistributionTenantTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#timeouts CloudfrontDistributionTenant#timeouts}

---

##### `wait_for_deployment`<sup>Optional</sup> <a name="wait_for_deployment" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.waitForDeployment"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#wait_for_deployment CloudfrontDistributionTenant#wait_for_deployment}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.putCustomizations">put_customizations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.putDomain">put_domain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.putManagedCertificateRequest">put_managed_certificate_request</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.putParameter">put_parameter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetConnectionGroupId">reset_connection_group_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetCustomizations">reset_customizations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetDomain">reset_domain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetManagedCertificateRequest">reset_managed_certificate_request</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetParameter">reset_parameter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetWaitForDeployment">reset_wait_for_deployment</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_customizations` <a name="put_customizations" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.putCustomizations"></a>

```python
def put_customizations(
  value: IResolvable | typing.List[CloudfrontDistributionTenantCustomizations]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.putCustomizations.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizations">CloudfrontDistributionTenantCustomizations</a>]

---

##### `put_domain` <a name="put_domain" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.putDomain"></a>

```python
def put_domain(
  value: IResolvable | typing.List[CloudfrontDistributionTenantDomain]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.putDomain.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomain">CloudfrontDistributionTenantDomain</a>]

---

##### `put_managed_certificate_request` <a name="put_managed_certificate_request" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.putManagedCertificateRequest"></a>

```python
def put_managed_certificate_request(
  value: IResolvable | typing.List[CloudfrontDistributionTenantManagedCertificateRequest]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.putManagedCertificateRequest.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequest">CloudfrontDistributionTenantManagedCertificateRequest</a>]

---

##### `put_parameter` <a name="put_parameter" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.putParameter"></a>

```python
def put_parameter(
  value: IResolvable | typing.List[CloudfrontDistributionTenantParameter]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.putParameter.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameter">CloudfrontDistributionTenantParameter</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#create CloudfrontDistributionTenant#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#delete CloudfrontDistributionTenant#delete}

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.putTimeouts.parameter.update"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#update CloudfrontDistributionTenant#update}

---

##### `reset_connection_group_id` <a name="reset_connection_group_id" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetConnectionGroupId"></a>

```python
def reset_connection_group_id() -> None
```

##### `reset_customizations` <a name="reset_customizations" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetCustomizations"></a>

```python
def reset_customizations() -> None
```

##### `reset_domain` <a name="reset_domain" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetDomain"></a>

```python
def reset_domain() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_managed_certificate_request` <a name="reset_managed_certificate_request" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetManagedCertificateRequest"></a>

```python
def reset_managed_certificate_request() -> None
```

##### `reset_parameter` <a name="reset_parameter" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetParameter"></a>

```python
def reset_parameter() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_wait_for_deployment` <a name="reset_wait_for_deployment" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetWaitForDeployment"></a>

```python
def reset_wait_for_deployment() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CloudfrontDistributionTenant resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.isConstruct"></a>

```python
from cdktn_provider_aws import cloudfront_distribution_tenant

cloudfrontDistributionTenant.CloudfrontDistributionTenant.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.isTerraformElement"></a>

```python
from cdktn_provider_aws import cloudfront_distribution_tenant

cloudfrontDistributionTenant.CloudfrontDistributionTenant.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.isTerraformResource"></a>

```python
from cdktn_provider_aws import cloudfront_distribution_tenant

cloudfrontDistributionTenant.CloudfrontDistributionTenant.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.generateConfigForImport"></a>

```python
from cdktn_provider_aws import cloudfront_distribution_tenant

cloudfrontDistributionTenant.CloudfrontDistributionTenant.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CloudfrontDistributionTenant resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CloudfrontDistributionTenant to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CloudfrontDistributionTenant that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CloudfrontDistributionTenant to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.customizations">customizations</a></code> | <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList">CloudfrontDistributionTenantCustomizationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.domain">domain</a></code> | <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList">CloudfrontDistributionTenantDomainList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.managedCertificateRequest">managed_certificate_request</a></code> | <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList">CloudfrontDistributionTenantManagedCertificateRequestList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.parameter">parameter</a></code> | <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList">CloudfrontDistributionTenantParameterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.tagsAll">tags_all</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference">CloudfrontDistributionTenantTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.connectionGroupIdInput">connection_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.customizationsInput">customizations_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizations">CloudfrontDistributionTenantCustomizations</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.distributionIdInput">distribution_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.domainInput">domain_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomain">CloudfrontDistributionTenantDomain</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.managedCertificateRequestInput">managed_certificate_request_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequest">CloudfrontDistributionTenantManagedCertificateRequest</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.parameterInput">parameter_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameter">CloudfrontDistributionTenantParameter</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.timeoutsInput">timeouts_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeouts">CloudfrontDistributionTenantTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.waitForDeploymentInput">wait_for_deployment_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.connectionGroupId">connection_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.distributionId">distribution_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.waitForDeployment">wait_for_deployment</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `customizations`<sup>Required</sup> <a name="customizations" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.customizations"></a>

```python
customizations: CloudfrontDistributionTenantCustomizationsList
```

- *Type:* <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList">CloudfrontDistributionTenantCustomizationsList</a>

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.domain"></a>

```python
domain: CloudfrontDistributionTenantDomainList
```

- *Type:* <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList">CloudfrontDistributionTenantDomainList</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `managed_certificate_request`<sup>Required</sup> <a name="managed_certificate_request" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.managedCertificateRequest"></a>

```python
managed_certificate_request: CloudfrontDistributionTenantManagedCertificateRequestList
```

- *Type:* <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList">CloudfrontDistributionTenantManagedCertificateRequestList</a>

---

##### `parameter`<sup>Required</sup> <a name="parameter" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.parameter"></a>

```python
parameter: CloudfrontDistributionTenantParameterList
```

- *Type:* <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList">CloudfrontDistributionTenantParameterList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.timeouts"></a>

```python
timeouts: CloudfrontDistributionTenantTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference">CloudfrontDistributionTenantTimeoutsOutputReference</a>

---

##### `connection_group_id_input`<sup>Optional</sup> <a name="connection_group_id_input" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.connectionGroupIdInput"></a>

```python
connection_group_id_input: str
```

- *Type:* str

---

##### `customizations_input`<sup>Optional</sup> <a name="customizations_input" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.customizationsInput"></a>

```python
customizations_input: IResolvable | typing.List[CloudfrontDistributionTenantCustomizations]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizations">CloudfrontDistributionTenantCustomizations</a>]

---

##### `distribution_id_input`<sup>Optional</sup> <a name="distribution_id_input" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.distributionIdInput"></a>

```python
distribution_id_input: str
```

- *Type:* str

---

##### `domain_input`<sup>Optional</sup> <a name="domain_input" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.domainInput"></a>

```python
domain_input: IResolvable | typing.List[CloudfrontDistributionTenantDomain]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomain">CloudfrontDistributionTenantDomain</a>]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `managed_certificate_request_input`<sup>Optional</sup> <a name="managed_certificate_request_input" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.managedCertificateRequestInput"></a>

```python
managed_certificate_request_input: IResolvable | typing.List[CloudfrontDistributionTenantManagedCertificateRequest]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequest">CloudfrontDistributionTenantManagedCertificateRequest</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parameter_input`<sup>Optional</sup> <a name="parameter_input" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.parameterInput"></a>

```python
parameter_input: IResolvable | typing.List[CloudfrontDistributionTenantParameter]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameter">CloudfrontDistributionTenantParameter</a>]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | CloudfrontDistributionTenantTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeouts">CloudfrontDistributionTenantTimeouts</a>

---

##### `wait_for_deployment_input`<sup>Optional</sup> <a name="wait_for_deployment_input" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.waitForDeploymentInput"></a>

```python
wait_for_deployment_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `connection_group_id`<sup>Required</sup> <a name="connection_group_id" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.connectionGroupId"></a>

```python
connection_group_id: str
```

- *Type:* str

---

##### `distribution_id`<sup>Required</sup> <a name="distribution_id" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.distributionId"></a>

```python
distribution_id: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `wait_for_deployment`<sup>Required</sup> <a name="wait_for_deployment" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.waitForDeployment"></a>

```python
wait_for_deployment: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudfrontDistributionTenantConfig <a name="CloudfrontDistributionTenantConfig" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.Initializer"></a>

```python
from cdktn_provider_aws import cloudfront_distribution_tenant

cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  distribution_id: str,
  name: str,
  connection_group_id: str = None,
  customizations: IResolvable | typing.List[CloudfrontDistributionTenantCustomizations] = None,
  domain: IResolvable | typing.List[CloudfrontDistributionTenantDomain] = None,
  enabled: bool | IResolvable = None,
  managed_certificate_request: IResolvable | typing.List[CloudfrontDistributionTenantManagedCertificateRequest] = None,
  parameter: IResolvable | typing.List[CloudfrontDistributionTenantParameter] = None,
  tags: typing.Mapping[str] = None,
  timeouts: CloudfrontDistributionTenantTimeouts = None,
  wait_for_deployment: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.distributionId">distribution_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#distribution_id CloudfrontDistributionTenant#distribution_id}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#name CloudfrontDistributionTenant#name}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.connectionGroupId">connection_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#connection_group_id CloudfrontDistributionTenant#connection_group_id}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.customizations">customizations</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizations">CloudfrontDistributionTenantCustomizations</a>]</code> | customizations block. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.domain">domain</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomain">CloudfrontDistributionTenantDomain</a>]</code> | domain block. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#enabled CloudfrontDistributionTenant#enabled}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.managedCertificateRequest">managed_certificate_request</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequest">CloudfrontDistributionTenantManagedCertificateRequest</a>]</code> | managed_certificate_request block. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.parameter">parameter</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameter">CloudfrontDistributionTenantParameter</a>]</code> | parameter block. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#tags CloudfrontDistributionTenant#tags}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeouts">CloudfrontDistributionTenantTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.waitForDeployment">wait_for_deployment</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#wait_for_deployment CloudfrontDistributionTenant#wait_for_deployment}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `distribution_id`<sup>Required</sup> <a name="distribution_id" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.distributionId"></a>

```python
distribution_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#distribution_id CloudfrontDistributionTenant#distribution_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#name CloudfrontDistributionTenant#name}.

---

##### `connection_group_id`<sup>Optional</sup> <a name="connection_group_id" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.connectionGroupId"></a>

```python
connection_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#connection_group_id CloudfrontDistributionTenant#connection_group_id}.

---

##### `customizations`<sup>Optional</sup> <a name="customizations" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.customizations"></a>

```python
customizations: IResolvable | typing.List[CloudfrontDistributionTenantCustomizations]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizations">CloudfrontDistributionTenantCustomizations</a>]

customizations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#customizations CloudfrontDistributionTenant#customizations}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.domain"></a>

```python
domain: IResolvable | typing.List[CloudfrontDistributionTenantDomain]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomain">CloudfrontDistributionTenantDomain</a>]

domain block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#domain CloudfrontDistributionTenant#domain}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#enabled CloudfrontDistributionTenant#enabled}.

---

##### `managed_certificate_request`<sup>Optional</sup> <a name="managed_certificate_request" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.managedCertificateRequest"></a>

```python
managed_certificate_request: IResolvable | typing.List[CloudfrontDistributionTenantManagedCertificateRequest]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequest">CloudfrontDistributionTenantManagedCertificateRequest</a>]

managed_certificate_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#managed_certificate_request CloudfrontDistributionTenant#managed_certificate_request}

---

##### `parameter`<sup>Optional</sup> <a name="parameter" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.parameter"></a>

```python
parameter: IResolvable | typing.List[CloudfrontDistributionTenantParameter]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameter">CloudfrontDistributionTenantParameter</a>]

parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#parameter CloudfrontDistributionTenant#parameter}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#tags CloudfrontDistributionTenant#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.timeouts"></a>

```python
timeouts: CloudfrontDistributionTenantTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeouts">CloudfrontDistributionTenantTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#timeouts CloudfrontDistributionTenant#timeouts}

---

##### `wait_for_deployment`<sup>Optional</sup> <a name="wait_for_deployment" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.waitForDeployment"></a>

```python
wait_for_deployment: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#wait_for_deployment CloudfrontDistributionTenant#wait_for_deployment}.

---

### CloudfrontDistributionTenantCustomizations <a name="CloudfrontDistributionTenantCustomizations" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizations.Initializer"></a>

```python
from cdktn_provider_aws import cloudfront_distribution_tenant

cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizations(
  certificate: IResolvable | typing.List[CloudfrontDistributionTenantCustomizationsCertificate] = None,
  geo_restriction: IResolvable | typing.List[CloudfrontDistributionTenantCustomizationsGeoRestriction] = None,
  web_acl: IResolvable | typing.List[CloudfrontDistributionTenantCustomizationsWebAcl] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizations.property.certificate">certificate</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificate">CloudfrontDistributionTenantCustomizationsCertificate</a>]</code> | certificate block. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizations.property.geoRestriction">geo_restriction</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestriction">CloudfrontDistributionTenantCustomizationsGeoRestriction</a>]</code> | geo_restriction block. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizations.property.webAcl">web_acl</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAcl">CloudfrontDistributionTenantCustomizationsWebAcl</a>]</code> | web_acl block. |

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizations.property.certificate"></a>

```python
certificate: IResolvable | typing.List[CloudfrontDistributionTenantCustomizationsCertificate]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificate">CloudfrontDistributionTenantCustomizationsCertificate</a>]

certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#certificate CloudfrontDistributionTenant#certificate}

---

##### `geo_restriction`<sup>Optional</sup> <a name="geo_restriction" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizations.property.geoRestriction"></a>

```python
geo_restriction: IResolvable | typing.List[CloudfrontDistributionTenantCustomizationsGeoRestriction]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestriction">CloudfrontDistributionTenantCustomizationsGeoRestriction</a>]

geo_restriction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#geo_restriction CloudfrontDistributionTenant#geo_restriction}

---

##### `web_acl`<sup>Optional</sup> <a name="web_acl" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizations.property.webAcl"></a>

```python
web_acl: IResolvable | typing.List[CloudfrontDistributionTenantCustomizationsWebAcl]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAcl">CloudfrontDistributionTenantCustomizationsWebAcl</a>]

web_acl block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#web_acl CloudfrontDistributionTenant#web_acl}

---

### CloudfrontDistributionTenantCustomizationsCertificate <a name="CloudfrontDistributionTenantCustomizationsCertificate" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificate.Initializer"></a>

```python
from cdktn_provider_aws import cloudfront_distribution_tenant

cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificate(
  arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificate.property.arn">arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#arn CloudfrontDistributionTenant#arn}. |

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificate.property.arn"></a>

```python
arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#arn CloudfrontDistributionTenant#arn}.

---

### CloudfrontDistributionTenantCustomizationsGeoRestriction <a name="CloudfrontDistributionTenantCustomizationsGeoRestriction" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestriction.Initializer"></a>

```python
from cdktn_provider_aws import cloudfront_distribution_tenant

cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestriction(
  locations: typing.List[str] = None,
  restriction_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestriction.property.locations">locations</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#locations CloudfrontDistributionTenant#locations}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestriction.property.restrictionType">restriction_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#restriction_type CloudfrontDistributionTenant#restriction_type}. |

---

##### `locations`<sup>Optional</sup> <a name="locations" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestriction.property.locations"></a>

```python
locations: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#locations CloudfrontDistributionTenant#locations}.

---

##### `restriction_type`<sup>Optional</sup> <a name="restriction_type" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestriction.property.restrictionType"></a>

```python
restriction_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#restriction_type CloudfrontDistributionTenant#restriction_type}.

---

### CloudfrontDistributionTenantCustomizationsWebAcl <a name="CloudfrontDistributionTenantCustomizationsWebAcl" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAcl"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAcl.Initializer"></a>

```python
from cdktn_provider_aws import cloudfront_distribution_tenant

cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAcl(
  action: str = None,
  arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAcl.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#action CloudfrontDistributionTenant#action}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAcl.property.arn">arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#arn CloudfrontDistributionTenant#arn}. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAcl.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#action CloudfrontDistributionTenant#action}.

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAcl.property.arn"></a>

```python
arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#arn CloudfrontDistributionTenant#arn}.

---

### CloudfrontDistributionTenantDomain <a name="CloudfrontDistributionTenantDomain" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomain"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomain.Initializer"></a>

```python
from cdktn_provider_aws import cloudfront_distribution_tenant

cloudfrontDistributionTenant.CloudfrontDistributionTenantDomain(
  domain: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomain.property.domain">domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#domain CloudfrontDistributionTenant#domain}. |

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomain.property.domain"></a>

```python
domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#domain CloudfrontDistributionTenant#domain}.

---

### CloudfrontDistributionTenantManagedCertificateRequest <a name="CloudfrontDistributionTenantManagedCertificateRequest" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequest"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequest.Initializer"></a>

```python
from cdktn_provider_aws import cloudfront_distribution_tenant

cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequest(
  certificate_transparency_logging_preference: str = None,
  primary_domain_name: str = None,
  validation_token_host: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequest.property.certificateTransparencyLoggingPreference">certificate_transparency_logging_preference</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#certificate_transparency_logging_preference CloudfrontDistributionTenant#certificate_transparency_logging_preference}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequest.property.primaryDomainName">primary_domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#primary_domain_name CloudfrontDistributionTenant#primary_domain_name}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequest.property.validationTokenHost">validation_token_host</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#validation_token_host CloudfrontDistributionTenant#validation_token_host}. |

---

##### `certificate_transparency_logging_preference`<sup>Optional</sup> <a name="certificate_transparency_logging_preference" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequest.property.certificateTransparencyLoggingPreference"></a>

```python
certificate_transparency_logging_preference: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#certificate_transparency_logging_preference CloudfrontDistributionTenant#certificate_transparency_logging_preference}.

---

##### `primary_domain_name`<sup>Optional</sup> <a name="primary_domain_name" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequest.property.primaryDomainName"></a>

```python
primary_domain_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#primary_domain_name CloudfrontDistributionTenant#primary_domain_name}.

---

##### `validation_token_host`<sup>Optional</sup> <a name="validation_token_host" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequest.property.validationTokenHost"></a>

```python
validation_token_host: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#validation_token_host CloudfrontDistributionTenant#validation_token_host}.

---

### CloudfrontDistributionTenantParameter <a name="CloudfrontDistributionTenantParameter" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameter.Initializer"></a>

```python
from cdktn_provider_aws import cloudfront_distribution_tenant

cloudfrontDistributionTenant.CloudfrontDistributionTenantParameter(
  name: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#name CloudfrontDistributionTenant#name}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameter.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#value CloudfrontDistributionTenant#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#name CloudfrontDistributionTenant#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameter.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#value CloudfrontDistributionTenant#value}.

---

### CloudfrontDistributionTenantTimeouts <a name="CloudfrontDistributionTenantTimeouts" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeouts.Initializer"></a>

```python
from cdktn_provider_aws import cloudfront_distribution_tenant

cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeouts.property.update">update</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#create CloudfrontDistributionTenant#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#delete CloudfrontDistributionTenant#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#update CloudfrontDistributionTenant#update}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudfrontDistributionTenantCustomizationsCertificateList <a name="CloudfrontDistributionTenantCustomizationsCertificateList" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList.Initializer"></a>

```python
from cdktn_provider_aws import cloudfront_distribution_tenant

cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudfrontDistributionTenantCustomizationsCertificateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificate">CloudfrontDistributionTenantCustomizationsCertificate</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CloudfrontDistributionTenantCustomizationsCertificate]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificate">CloudfrontDistributionTenantCustomizationsCertificate</a>]

---


### CloudfrontDistributionTenantCustomizationsCertificateOutputReference <a name="CloudfrontDistributionTenantCustomizationsCertificateOutputReference" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import cloudfront_distribution_tenant

cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.resetArn">reset_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_arn` <a name="reset_arn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.resetArn"></a>

```python
def reset_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.arnInput">arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificate">CloudfrontDistributionTenantCustomizationsCertificate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn_input`<sup>Optional</sup> <a name="arn_input" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.arnInput"></a>

```python
arn_input: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudfrontDistributionTenantCustomizationsCertificate
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificate">CloudfrontDistributionTenantCustomizationsCertificate</a>

---


### CloudfrontDistributionTenantCustomizationsGeoRestrictionList <a name="CloudfrontDistributionTenantCustomizationsGeoRestrictionList" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList.Initializer"></a>

```python
from cdktn_provider_aws import cloudfront_distribution_tenant

cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestriction">CloudfrontDistributionTenantCustomizationsGeoRestriction</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CloudfrontDistributionTenantCustomizationsGeoRestriction]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestriction">CloudfrontDistributionTenantCustomizationsGeoRestriction</a>]

---


### CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference <a name="CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import cloudfront_distribution_tenant

cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.resetLocations">reset_locations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.resetRestrictionType">reset_restriction_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_locations` <a name="reset_locations" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.resetLocations"></a>

```python
def reset_locations() -> None
```

##### `reset_restriction_type` <a name="reset_restriction_type" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.resetRestrictionType"></a>

```python
def reset_restriction_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.property.locationsInput">locations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.property.restrictionTypeInput">restriction_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.property.locations">locations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.property.restrictionType">restriction_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestriction">CloudfrontDistributionTenantCustomizationsGeoRestriction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `locations_input`<sup>Optional</sup> <a name="locations_input" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.property.locationsInput"></a>

```python
locations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `restriction_type_input`<sup>Optional</sup> <a name="restriction_type_input" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.property.restrictionTypeInput"></a>

```python
restriction_type_input: str
```

- *Type:* str

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.property.locations"></a>

```python
locations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `restriction_type`<sup>Required</sup> <a name="restriction_type" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.property.restrictionType"></a>

```python
restriction_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudfrontDistributionTenantCustomizationsGeoRestriction
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestriction">CloudfrontDistributionTenantCustomizationsGeoRestriction</a>

---


### CloudfrontDistributionTenantCustomizationsList <a name="CloudfrontDistributionTenantCustomizationsList" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList.Initializer"></a>

```python
from cdktn_provider_aws import cloudfront_distribution_tenant

cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudfrontDistributionTenantCustomizationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizations">CloudfrontDistributionTenantCustomizations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CloudfrontDistributionTenantCustomizations]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizations">CloudfrontDistributionTenantCustomizations</a>]

---


### CloudfrontDistributionTenantCustomizationsOutputReference <a name="CloudfrontDistributionTenantCustomizationsOutputReference" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import cloudfront_distribution_tenant

cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.putCertificate">put_certificate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.putGeoRestriction">put_geo_restriction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.putWebAcl">put_web_acl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.resetCertificate">reset_certificate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.resetGeoRestriction">reset_geo_restriction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.resetWebAcl">reset_web_acl</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_certificate` <a name="put_certificate" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.putCertificate"></a>

```python
def put_certificate(
  value: IResolvable | typing.List[CloudfrontDistributionTenantCustomizationsCertificate]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.putCertificate.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificate">CloudfrontDistributionTenantCustomizationsCertificate</a>]

---

##### `put_geo_restriction` <a name="put_geo_restriction" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.putGeoRestriction"></a>

```python
def put_geo_restriction(
  value: IResolvable | typing.List[CloudfrontDistributionTenantCustomizationsGeoRestriction]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.putGeoRestriction.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestriction">CloudfrontDistributionTenantCustomizationsGeoRestriction</a>]

---

##### `put_web_acl` <a name="put_web_acl" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.putWebAcl"></a>

```python
def put_web_acl(
  value: IResolvable | typing.List[CloudfrontDistributionTenantCustomizationsWebAcl]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.putWebAcl.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAcl">CloudfrontDistributionTenantCustomizationsWebAcl</a>]

---

##### `reset_certificate` <a name="reset_certificate" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.resetCertificate"></a>

```python
def reset_certificate() -> None
```

##### `reset_geo_restriction` <a name="reset_geo_restriction" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.resetGeoRestriction"></a>

```python
def reset_geo_restriction() -> None
```

##### `reset_web_acl` <a name="reset_web_acl" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.resetWebAcl"></a>

```python
def reset_web_acl() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.certificate">certificate</a></code> | <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList">CloudfrontDistributionTenantCustomizationsCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.geoRestriction">geo_restriction</a></code> | <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList">CloudfrontDistributionTenantCustomizationsGeoRestrictionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.webAcl">web_acl</a></code> | <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList">CloudfrontDistributionTenantCustomizationsWebAclList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.certificateInput">certificate_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificate">CloudfrontDistributionTenantCustomizationsCertificate</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.geoRestrictionInput">geo_restriction_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestriction">CloudfrontDistributionTenantCustomizationsGeoRestriction</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.webAclInput">web_acl_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAcl">CloudfrontDistributionTenantCustomizationsWebAcl</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizations">CloudfrontDistributionTenantCustomizations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.certificate"></a>

```python
certificate: CloudfrontDistributionTenantCustomizationsCertificateList
```

- *Type:* <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList">CloudfrontDistributionTenantCustomizationsCertificateList</a>

---

##### `geo_restriction`<sup>Required</sup> <a name="geo_restriction" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.geoRestriction"></a>

```python
geo_restriction: CloudfrontDistributionTenantCustomizationsGeoRestrictionList
```

- *Type:* <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList">CloudfrontDistributionTenantCustomizationsGeoRestrictionList</a>

---

##### `web_acl`<sup>Required</sup> <a name="web_acl" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.webAcl"></a>

```python
web_acl: CloudfrontDistributionTenantCustomizationsWebAclList
```

- *Type:* <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList">CloudfrontDistributionTenantCustomizationsWebAclList</a>

---

##### `certificate_input`<sup>Optional</sup> <a name="certificate_input" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.certificateInput"></a>

```python
certificate_input: IResolvable | typing.List[CloudfrontDistributionTenantCustomizationsCertificate]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificate">CloudfrontDistributionTenantCustomizationsCertificate</a>]

---

##### `geo_restriction_input`<sup>Optional</sup> <a name="geo_restriction_input" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.geoRestrictionInput"></a>

```python
geo_restriction_input: IResolvable | typing.List[CloudfrontDistributionTenantCustomizationsGeoRestriction]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestriction">CloudfrontDistributionTenantCustomizationsGeoRestriction</a>]

---

##### `web_acl_input`<sup>Optional</sup> <a name="web_acl_input" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.webAclInput"></a>

```python
web_acl_input: IResolvable | typing.List[CloudfrontDistributionTenantCustomizationsWebAcl]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAcl">CloudfrontDistributionTenantCustomizationsWebAcl</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudfrontDistributionTenantCustomizations
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizations">CloudfrontDistributionTenantCustomizations</a>

---


### CloudfrontDistributionTenantCustomizationsWebAclList <a name="CloudfrontDistributionTenantCustomizationsWebAclList" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList.Initializer"></a>

```python
from cdktn_provider_aws import cloudfront_distribution_tenant

cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudfrontDistributionTenantCustomizationsWebAclOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAcl">CloudfrontDistributionTenantCustomizationsWebAcl</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CloudfrontDistributionTenantCustomizationsWebAcl]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAcl">CloudfrontDistributionTenantCustomizationsWebAcl</a>]

---


### CloudfrontDistributionTenantCustomizationsWebAclOutputReference <a name="CloudfrontDistributionTenantCustomizationsWebAclOutputReference" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import cloudfront_distribution_tenant

cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.resetArn">reset_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_action` <a name="reset_action" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_arn` <a name="reset_arn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.resetArn"></a>

```python
def reset_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.arnInput">arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAcl">CloudfrontDistributionTenantCustomizationsWebAcl</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `arn_input`<sup>Optional</sup> <a name="arn_input" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.arnInput"></a>

```python
arn_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudfrontDistributionTenantCustomizationsWebAcl
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAcl">CloudfrontDistributionTenantCustomizationsWebAcl</a>

---


### CloudfrontDistributionTenantDomainList <a name="CloudfrontDistributionTenantDomainList" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList.Initializer"></a>

```python
from cdktn_provider_aws import cloudfront_distribution_tenant

cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudfrontDistributionTenantDomainOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomain">CloudfrontDistributionTenantDomain</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CloudfrontDistributionTenantDomain]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomain">CloudfrontDistributionTenantDomain</a>]

---


### CloudfrontDistributionTenantDomainOutputReference <a name="CloudfrontDistributionTenantDomainOutputReference" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import cloudfront_distribution_tenant

cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.property.domainInput">domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomain">CloudfrontDistributionTenantDomain</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `domain_input`<sup>Optional</sup> <a name="domain_input" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.property.domainInput"></a>

```python
domain_input: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudfrontDistributionTenantDomain
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomain">CloudfrontDistributionTenantDomain</a>

---


### CloudfrontDistributionTenantManagedCertificateRequestList <a name="CloudfrontDistributionTenantManagedCertificateRequestList" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList.Initializer"></a>

```python
from cdktn_provider_aws import cloudfront_distribution_tenant

cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudfrontDistributionTenantManagedCertificateRequestOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequest">CloudfrontDistributionTenantManagedCertificateRequest</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CloudfrontDistributionTenantManagedCertificateRequest]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequest">CloudfrontDistributionTenantManagedCertificateRequest</a>]

---


### CloudfrontDistributionTenantManagedCertificateRequestOutputReference <a name="CloudfrontDistributionTenantManagedCertificateRequestOutputReference" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import cloudfront_distribution_tenant

cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.resetCertificateTransparencyLoggingPreference">reset_certificate_transparency_logging_preference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.resetPrimaryDomainName">reset_primary_domain_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.resetValidationTokenHost">reset_validation_token_host</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_certificate_transparency_logging_preference` <a name="reset_certificate_transparency_logging_preference" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.resetCertificateTransparencyLoggingPreference"></a>

```python
def reset_certificate_transparency_logging_preference() -> None
```

##### `reset_primary_domain_name` <a name="reset_primary_domain_name" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.resetPrimaryDomainName"></a>

```python
def reset_primary_domain_name() -> None
```

##### `reset_validation_token_host` <a name="reset_validation_token_host" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.resetValidationTokenHost"></a>

```python
def reset_validation_token_host() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.certificateTransparencyLoggingPreferenceInput">certificate_transparency_logging_preference_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.primaryDomainNameInput">primary_domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.validationTokenHostInput">validation_token_host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.certificateTransparencyLoggingPreference">certificate_transparency_logging_preference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.primaryDomainName">primary_domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.validationTokenHost">validation_token_host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequest">CloudfrontDistributionTenantManagedCertificateRequest</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_transparency_logging_preference_input`<sup>Optional</sup> <a name="certificate_transparency_logging_preference_input" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.certificateTransparencyLoggingPreferenceInput"></a>

```python
certificate_transparency_logging_preference_input: str
```

- *Type:* str

---

##### `primary_domain_name_input`<sup>Optional</sup> <a name="primary_domain_name_input" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.primaryDomainNameInput"></a>

```python
primary_domain_name_input: str
```

- *Type:* str

---

##### `validation_token_host_input`<sup>Optional</sup> <a name="validation_token_host_input" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.validationTokenHostInput"></a>

```python
validation_token_host_input: str
```

- *Type:* str

---

##### `certificate_transparency_logging_preference`<sup>Required</sup> <a name="certificate_transparency_logging_preference" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.certificateTransparencyLoggingPreference"></a>

```python
certificate_transparency_logging_preference: str
```

- *Type:* str

---

##### `primary_domain_name`<sup>Required</sup> <a name="primary_domain_name" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.primaryDomainName"></a>

```python
primary_domain_name: str
```

- *Type:* str

---

##### `validation_token_host`<sup>Required</sup> <a name="validation_token_host" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.validationTokenHost"></a>

```python
validation_token_host: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudfrontDistributionTenantManagedCertificateRequest
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequest">CloudfrontDistributionTenantManagedCertificateRequest</a>

---


### CloudfrontDistributionTenantParameterList <a name="CloudfrontDistributionTenantParameterList" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList.Initializer"></a>

```python
from cdktn_provider_aws import cloudfront_distribution_tenant

cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudfrontDistributionTenantParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameter">CloudfrontDistributionTenantParameter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CloudfrontDistributionTenantParameter]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameter">CloudfrontDistributionTenantParameter</a>]

---


### CloudfrontDistributionTenantParameterOutputReference <a name="CloudfrontDistributionTenantParameterOutputReference" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import cloudfront_distribution_tenant

cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameter">CloudfrontDistributionTenantParameter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudfrontDistributionTenantParameter
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameter">CloudfrontDistributionTenantParameter</a>

---


### CloudfrontDistributionTenantTimeoutsOutputReference <a name="CloudfrontDistributionTenantTimeoutsOutputReference" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import cloudfront_distribution_tenant

cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeouts">CloudfrontDistributionTenantTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudfrontDistributionTenantTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeouts">CloudfrontDistributionTenantTimeouts</a>

---




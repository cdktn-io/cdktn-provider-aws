# `dataAwsAlbTargetGroup` Submodule <a name="`dataAwsAlbTargetGroup` Submodule" id="@cdktn/provider-aws.dataAwsAlbTargetGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsAlbTargetGroup <a name="DataAwsAlbTargetGroup" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/alb_target_group aws_alb_target_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_alb_target_group.DataAwsAlbTargetGroup;

DataAwsAlbTargetGroup.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .arn(java.lang.String)
//  .id(java.lang.String)
//  .loadBalancingAnomalyMitigation(java.lang.String)
//  .name(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DataAwsAlbTargetGroupTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.Initializer.parameter.arn">arn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/alb_target_group#arn DataAwsAlbTargetGroup#arn}. |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/alb_target_group#id DataAwsAlbTargetGroup#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.Initializer.parameter.loadBalancingAnomalyMitigation">loadBalancingAnomalyMitigation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/alb_target_group#load_balancing_anomaly_mitigation DataAwsAlbTargetGroup#load_balancing_anomaly_mitigation}. |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/alb_target_group#name DataAwsAlbTargetGroup#name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/alb_target_group#tags DataAwsAlbTargetGroup#tags}. |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupTimeouts">DataAwsAlbTargetGroupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.Initializer.parameter.arn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/alb_target_group#arn DataAwsAlbTargetGroup#arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/alb_target_group#id DataAwsAlbTargetGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `loadBalancingAnomalyMitigation`<sup>Optional</sup> <a name="loadBalancingAnomalyMitigation" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.Initializer.parameter.loadBalancingAnomalyMitigation"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/alb_target_group#load_balancing_anomaly_mitigation DataAwsAlbTargetGroup#load_balancing_anomaly_mitigation}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/alb_target_group#name DataAwsAlbTargetGroup#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/alb_target_group#region DataAwsAlbTargetGroup#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/alb_target_group#tags DataAwsAlbTargetGroup#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupTimeouts">DataAwsAlbTargetGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/alb_target_group#timeouts DataAwsAlbTargetGroup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.resetArn">resetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.resetLoadBalancingAnomalyMitigation">resetLoadBalancingAnomalyMitigation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.putTimeouts"></a>

```java
public void putTimeouts(DataAwsAlbTargetGroupTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupTimeouts">DataAwsAlbTargetGroupTimeouts</a>

---

##### `resetArn` <a name="resetArn" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.resetArn"></a>

```java
public void resetArn()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.resetId"></a>

```java
public void resetId()
```

##### `resetLoadBalancingAnomalyMitigation` <a name="resetLoadBalancingAnomalyMitigation" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.resetLoadBalancingAnomalyMitigation"></a>

```java
public void resetLoadBalancingAnomalyMitigation()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.resetName"></a>

```java
public void resetName()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsAlbTargetGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.isConstruct"></a>

```java
import io.cdktn.providers.aws.data_aws_alb_target_group.DataAwsAlbTargetGroup;

DataAwsAlbTargetGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.data_aws_alb_target_group.DataAwsAlbTargetGroup;

DataAwsAlbTargetGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.isTerraformDataSource"></a>

```java
import io.cdktn.providers.aws.data_aws_alb_target_group.DataAwsAlbTargetGroup;

DataAwsAlbTargetGroup.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.data_aws_alb_target_group.DataAwsAlbTargetGroup;

DataAwsAlbTargetGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsAlbTargetGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsAlbTargetGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsAlbTargetGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsAlbTargetGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/alb_target_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsAlbTargetGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.arnSuffix">arnSuffix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.connectionTermination">connectionTermination</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.deregistrationDelay">deregistrationDelay</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.healthCheck">healthCheck</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckList">DataAwsAlbTargetGroupHealthCheckList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.lambdaMultiValueHeadersEnabled">lambdaMultiValueHeadersEnabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.loadBalancerArns">loadBalancerArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.loadBalancingAlgorithmType">loadBalancingAlgorithmType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.loadBalancingCrossZoneEnabled">loadBalancingCrossZoneEnabled</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.preserveClientIp">preserveClientIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.protocolVersion">protocolVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.proxyProtocolV2">proxyProtocolV2</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.slowStart">slowStart</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.stickiness">stickiness</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessList">DataAwsAlbTargetGroupStickinessList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.targetControlPort">targetControlPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.targetType">targetType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupTimeoutsOutputReference">DataAwsAlbTargetGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.arnInput">arnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.loadBalancingAnomalyMitigationInput">loadBalancingAnomalyMitigationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupTimeouts">DataAwsAlbTargetGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.loadBalancingAnomalyMitigation">loadBalancingAnomalyMitigation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `arnSuffix`<sup>Required</sup> <a name="arnSuffix" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.arnSuffix"></a>

```java
public java.lang.String getArnSuffix();
```

- *Type:* java.lang.String

---

##### `connectionTermination`<sup>Required</sup> <a name="connectionTermination" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.connectionTermination"></a>

```java
public IResolvable getConnectionTermination();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `deregistrationDelay`<sup>Required</sup> <a name="deregistrationDelay" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.deregistrationDelay"></a>

```java
public java.lang.String getDeregistrationDelay();
```

- *Type:* java.lang.String

---

##### `healthCheck`<sup>Required</sup> <a name="healthCheck" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.healthCheck"></a>

```java
public DataAwsAlbTargetGroupHealthCheckList getHealthCheck();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckList">DataAwsAlbTargetGroupHealthCheckList</a>

---

##### `lambdaMultiValueHeadersEnabled`<sup>Required</sup> <a name="lambdaMultiValueHeadersEnabled" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.lambdaMultiValueHeadersEnabled"></a>

```java
public IResolvable getLambdaMultiValueHeadersEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `loadBalancerArns`<sup>Required</sup> <a name="loadBalancerArns" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.loadBalancerArns"></a>

```java
public java.util.List<java.lang.String> getLoadBalancerArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `loadBalancingAlgorithmType`<sup>Required</sup> <a name="loadBalancingAlgorithmType" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.loadBalancingAlgorithmType"></a>

```java
public java.lang.String getLoadBalancingAlgorithmType();
```

- *Type:* java.lang.String

---

##### `loadBalancingCrossZoneEnabled`<sup>Required</sup> <a name="loadBalancingCrossZoneEnabled" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.loadBalancingCrossZoneEnabled"></a>

```java
public java.lang.String getLoadBalancingCrossZoneEnabled();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `preserveClientIp`<sup>Required</sup> <a name="preserveClientIp" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.preserveClientIp"></a>

```java
public java.lang.String getPreserveClientIp();
```

- *Type:* java.lang.String

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `protocolVersion`<sup>Required</sup> <a name="protocolVersion" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.protocolVersion"></a>

```java
public java.lang.String getProtocolVersion();
```

- *Type:* java.lang.String

---

##### `proxyProtocolV2`<sup>Required</sup> <a name="proxyProtocolV2" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.proxyProtocolV2"></a>

```java
public IResolvable getProxyProtocolV2();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `slowStart`<sup>Required</sup> <a name="slowStart" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.slowStart"></a>

```java
public java.lang.Number getSlowStart();
```

- *Type:* java.lang.Number

---

##### `stickiness`<sup>Required</sup> <a name="stickiness" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.stickiness"></a>

```java
public DataAwsAlbTargetGroupStickinessList getStickiness();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessList">DataAwsAlbTargetGroupStickinessList</a>

---

##### `targetControlPort`<sup>Required</sup> <a name="targetControlPort" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.targetControlPort"></a>

```java
public java.lang.Number getTargetControlPort();
```

- *Type:* java.lang.Number

---

##### `targetType`<sup>Required</sup> <a name="targetType" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.targetType"></a>

```java
public java.lang.String getTargetType();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.timeouts"></a>

```java
public DataAwsAlbTargetGroupTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupTimeoutsOutputReference">DataAwsAlbTargetGroupTimeoutsOutputReference</a>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.arnInput"></a>

```java
public java.lang.String getArnInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `loadBalancingAnomalyMitigationInput`<sup>Optional</sup> <a name="loadBalancingAnomalyMitigationInput" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.loadBalancingAnomalyMitigationInput"></a>

```java
public java.lang.String getLoadBalancingAnomalyMitigationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.timeoutsInput"></a>

```java
public IResolvable|DataAwsAlbTargetGroupTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupTimeouts">DataAwsAlbTargetGroupTimeouts</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `loadBalancingAnomalyMitigation`<sup>Required</sup> <a name="loadBalancingAnomalyMitigation" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.loadBalancingAnomalyMitigation"></a>

```java
public java.lang.String getLoadBalancingAnomalyMitigation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsAlbTargetGroupConfig <a name="DataAwsAlbTargetGroupConfig" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_alb_target_group.DataAwsAlbTargetGroupConfig;

DataAwsAlbTargetGroupConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .arn(java.lang.String)
//  .id(java.lang.String)
//  .loadBalancingAnomalyMitigation(java.lang.String)
//  .name(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DataAwsAlbTargetGroupTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupConfig.property.arn">arn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/alb_target_group#arn DataAwsAlbTargetGroup#arn}. |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/alb_target_group#id DataAwsAlbTargetGroup#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupConfig.property.loadBalancingAnomalyMitigation">loadBalancingAnomalyMitigation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/alb_target_group#load_balancing_anomaly_mitigation DataAwsAlbTargetGroup#load_balancing_anomaly_mitigation}. |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/alb_target_group#name DataAwsAlbTargetGroup#name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/alb_target_group#tags DataAwsAlbTargetGroup#tags}. |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupTimeouts">DataAwsAlbTargetGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupConfig.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/alb_target_group#arn DataAwsAlbTargetGroup#arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/alb_target_group#id DataAwsAlbTargetGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `loadBalancingAnomalyMitigation`<sup>Optional</sup> <a name="loadBalancingAnomalyMitigation" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupConfig.property.loadBalancingAnomalyMitigation"></a>

```java
public java.lang.String getLoadBalancingAnomalyMitigation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/alb_target_group#load_balancing_anomaly_mitigation DataAwsAlbTargetGroup#load_balancing_anomaly_mitigation}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/alb_target_group#name DataAwsAlbTargetGroup#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/alb_target_group#region DataAwsAlbTargetGroup#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/alb_target_group#tags DataAwsAlbTargetGroup#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupConfig.property.timeouts"></a>

```java
public DataAwsAlbTargetGroupTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupTimeouts">DataAwsAlbTargetGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/alb_target_group#timeouts DataAwsAlbTargetGroup#timeouts}

---

### DataAwsAlbTargetGroupHealthCheck <a name="DataAwsAlbTargetGroupHealthCheck" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheck.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_alb_target_group.DataAwsAlbTargetGroupHealthCheck;

DataAwsAlbTargetGroupHealthCheck.builder()
    .build();
```


### DataAwsAlbTargetGroupStickiness <a name="DataAwsAlbTargetGroupStickiness" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickiness"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickiness.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_alb_target_group.DataAwsAlbTargetGroupStickiness;

DataAwsAlbTargetGroupStickiness.builder()
    .build();
```


### DataAwsAlbTargetGroupTimeouts <a name="DataAwsAlbTargetGroupTimeouts" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_alb_target_group.DataAwsAlbTargetGroupTimeouts;

DataAwsAlbTargetGroupTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/alb_target_group#read DataAwsAlbTargetGroup#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/alb_target_group#read DataAwsAlbTargetGroup#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsAlbTargetGroupHealthCheckList <a name="DataAwsAlbTargetGroupHealthCheckList" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_alb_target_group.DataAwsAlbTargetGroupHealthCheckList;

new DataAwsAlbTargetGroupHealthCheckList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckList.get"></a>

```java
public DataAwsAlbTargetGroupHealthCheckOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsAlbTargetGroupHealthCheckOutputReference <a name="DataAwsAlbTargetGroupHealthCheckOutputReference" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_alb_target_group.DataAwsAlbTargetGroupHealthCheckOutputReference;

new DataAwsAlbTargetGroupHealthCheckOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckOutputReference.property.enabled">enabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckOutputReference.property.healthyThreshold">healthyThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckOutputReference.property.interval">interval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckOutputReference.property.matcher">matcher</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckOutputReference.property.port">port</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckOutputReference.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckOutputReference.property.unhealthyThreshold">unhealthyThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheck">DataAwsAlbTargetGroupHealthCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `healthyThreshold`<sup>Required</sup> <a name="healthyThreshold" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckOutputReference.property.healthyThreshold"></a>

```java
public java.lang.Number getHealthyThreshold();
```

- *Type:* java.lang.Number

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckOutputReference.property.interval"></a>

```java
public java.lang.Number getInterval();
```

- *Type:* java.lang.Number

---

##### `matcher`<sup>Required</sup> <a name="matcher" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckOutputReference.property.matcher"></a>

```java
public java.lang.String getMatcher();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckOutputReference.property.port"></a>

```java
public java.lang.String getPort();
```

- *Type:* java.lang.String

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckOutputReference.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

---

##### `unhealthyThreshold`<sup>Required</sup> <a name="unhealthyThreshold" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckOutputReference.property.unhealthyThreshold"></a>

```java
public java.lang.Number getUnhealthyThreshold();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheckOutputReference.property.internalValue"></a>

```java
public DataAwsAlbTargetGroupHealthCheck getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupHealthCheck">DataAwsAlbTargetGroupHealthCheck</a>

---


### DataAwsAlbTargetGroupStickinessList <a name="DataAwsAlbTargetGroupStickinessList" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_alb_target_group.DataAwsAlbTargetGroupStickinessList;

new DataAwsAlbTargetGroupStickinessList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessList.get"></a>

```java
public DataAwsAlbTargetGroupStickinessOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsAlbTargetGroupStickinessOutputReference <a name="DataAwsAlbTargetGroupStickinessOutputReference" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_alb_target_group.DataAwsAlbTargetGroupStickinessOutputReference;

new DataAwsAlbTargetGroupStickinessOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessOutputReference.property.cookieDuration">cookieDuration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessOutputReference.property.cookieName">cookieName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessOutputReference.property.enabled">enabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickiness">DataAwsAlbTargetGroupStickiness</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cookieDuration`<sup>Required</sup> <a name="cookieDuration" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessOutputReference.property.cookieDuration"></a>

```java
public java.lang.Number getCookieDuration();
```

- *Type:* java.lang.Number

---

##### `cookieName`<sup>Required</sup> <a name="cookieName" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessOutputReference.property.cookieName"></a>

```java
public java.lang.String getCookieName();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickinessOutputReference.property.internalValue"></a>

```java
public DataAwsAlbTargetGroupStickiness getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupStickiness">DataAwsAlbTargetGroupStickiness</a>

---


### DataAwsAlbTargetGroupTimeoutsOutputReference <a name="DataAwsAlbTargetGroupTimeoutsOutputReference" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_alb_target_group.DataAwsAlbTargetGroupTimeoutsOutputReference;

new DataAwsAlbTargetGroupTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupTimeouts">DataAwsAlbTargetGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataAwsAlbTargetGroupTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsAlbTargetGroup.DataAwsAlbTargetGroupTimeouts">DataAwsAlbTargetGroupTimeouts</a>

---




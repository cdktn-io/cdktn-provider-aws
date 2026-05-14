# `redshiftUsageLimit` Submodule <a name="`redshiftUsageLimit` Submodule" id="@cdktn/provider-aws.redshiftUsageLimit"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftUsageLimit <a name="RedshiftUsageLimit" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/redshift_usage_limit aws_redshift_usage_limit}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.Initializer"></a>

```java
import io.cdktn.providers.aws.redshift_usage_limit.RedshiftUsageLimit;

RedshiftUsageLimit.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .amount(java.lang.Number)
    .clusterIdentifier(java.lang.String)
    .featureType(java.lang.String)
    .limitType(java.lang.String)
//  .breachAction(java.lang.String)
//  .id(java.lang.String)
//  .period(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.amount">amount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/redshift_usage_limit#amount RedshiftUsageLimit#amount}. |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.clusterIdentifier">clusterIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/redshift_usage_limit#cluster_identifier RedshiftUsageLimit#cluster_identifier}. |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.featureType">featureType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/redshift_usage_limit#feature_type RedshiftUsageLimit#feature_type}. |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.limitType">limitType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/redshift_usage_limit#limit_type RedshiftUsageLimit#limit_type}. |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.breachAction">breachAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/redshift_usage_limit#breach_action RedshiftUsageLimit#breach_action}. |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/redshift_usage_limit#id RedshiftUsageLimit#id}. |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.period">period</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/redshift_usage_limit#period RedshiftUsageLimit#period}. |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/redshift_usage_limit#tags RedshiftUsageLimit#tags}. |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/redshift_usage_limit#tags_all RedshiftUsageLimit#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.amount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/redshift_usage_limit#amount RedshiftUsageLimit#amount}.

---

##### `clusterIdentifier`<sup>Required</sup> <a name="clusterIdentifier" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.clusterIdentifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/redshift_usage_limit#cluster_identifier RedshiftUsageLimit#cluster_identifier}.

---

##### `featureType`<sup>Required</sup> <a name="featureType" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.featureType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/redshift_usage_limit#feature_type RedshiftUsageLimit#feature_type}.

---

##### `limitType`<sup>Required</sup> <a name="limitType" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.limitType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/redshift_usage_limit#limit_type RedshiftUsageLimit#limit_type}.

---

##### `breachAction`<sup>Optional</sup> <a name="breachAction" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.breachAction"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/redshift_usage_limit#breach_action RedshiftUsageLimit#breach_action}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/redshift_usage_limit#id RedshiftUsageLimit#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.period"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/redshift_usage_limit#period RedshiftUsageLimit#period}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/redshift_usage_limit#region RedshiftUsageLimit#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/redshift_usage_limit#tags RedshiftUsageLimit#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/redshift_usage_limit#tags_all RedshiftUsageLimit#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.resetBreachAction">resetBreachAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.resetPeriod">resetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetBreachAction` <a name="resetBreachAction" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.resetBreachAction"></a>

```java
public void resetBreachAction()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.resetId"></a>

```java
public void resetId()
```

##### `resetPeriod` <a name="resetPeriod" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.resetPeriod"></a>

```java
public void resetPeriod()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.resetTagsAll"></a>

```java
public void resetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a RedshiftUsageLimit resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.isConstruct"></a>

```java
import io.cdktn.providers.aws.redshift_usage_limit.RedshiftUsageLimit;

RedshiftUsageLimit.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.redshift_usage_limit.RedshiftUsageLimit;

RedshiftUsageLimit.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.redshift_usage_limit.RedshiftUsageLimit;

RedshiftUsageLimit.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.redshift_usage_limit.RedshiftUsageLimit;

RedshiftUsageLimit.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),RedshiftUsageLimit.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a RedshiftUsageLimit resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the RedshiftUsageLimit to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing RedshiftUsageLimit that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/redshift_usage_limit#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the RedshiftUsageLimit to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.amountInput">amountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.breachActionInput">breachActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.clusterIdentifierInput">clusterIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.featureTypeInput">featureTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.limitTypeInput">limitTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.periodInput">periodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.amount">amount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.breachAction">breachAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.clusterIdentifier">clusterIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.featureType">featureType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.limitType">limitType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.period">period</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `amountInput`<sup>Optional</sup> <a name="amountInput" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.amountInput"></a>

```java
public java.lang.Number getAmountInput();
```

- *Type:* java.lang.Number

---

##### `breachActionInput`<sup>Optional</sup> <a name="breachActionInput" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.breachActionInput"></a>

```java
public java.lang.String getBreachActionInput();
```

- *Type:* java.lang.String

---

##### `clusterIdentifierInput`<sup>Optional</sup> <a name="clusterIdentifierInput" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.clusterIdentifierInput"></a>

```java
public java.lang.String getClusterIdentifierInput();
```

- *Type:* java.lang.String

---

##### `featureTypeInput`<sup>Optional</sup> <a name="featureTypeInput" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.featureTypeInput"></a>

```java
public java.lang.String getFeatureTypeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `limitTypeInput`<sup>Optional</sup> <a name="limitTypeInput" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.limitTypeInput"></a>

```java
public java.lang.String getLimitTypeInput();
```

- *Type:* java.lang.String

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.periodInput"></a>

```java
public java.lang.String getPeriodInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.amount"></a>

```java
public java.lang.Number getAmount();
```

- *Type:* java.lang.Number

---

##### `breachAction`<sup>Required</sup> <a name="breachAction" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.breachAction"></a>

```java
public java.lang.String getBreachAction();
```

- *Type:* java.lang.String

---

##### `clusterIdentifier`<sup>Required</sup> <a name="clusterIdentifier" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.clusterIdentifier"></a>

```java
public java.lang.String getClusterIdentifier();
```

- *Type:* java.lang.String

---

##### `featureType`<sup>Required</sup> <a name="featureType" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.featureType"></a>

```java
public java.lang.String getFeatureType();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `limitType`<sup>Required</sup> <a name="limitType" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.limitType"></a>

```java
public java.lang.String getLimitType();
```

- *Type:* java.lang.String

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.period"></a>

```java
public java.lang.String getPeriod();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftUsageLimitConfig <a name="RedshiftUsageLimitConfig" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.redshift_usage_limit.RedshiftUsageLimitConfig;

RedshiftUsageLimitConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .amount(java.lang.Number)
    .clusterIdentifier(java.lang.String)
    .featureType(java.lang.String)
    .limitType(java.lang.String)
//  .breachAction(java.lang.String)
//  .id(java.lang.String)
//  .period(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.amount">amount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/redshift_usage_limit#amount RedshiftUsageLimit#amount}. |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.clusterIdentifier">clusterIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/redshift_usage_limit#cluster_identifier RedshiftUsageLimit#cluster_identifier}. |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.featureType">featureType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/redshift_usage_limit#feature_type RedshiftUsageLimit#feature_type}. |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.limitType">limitType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/redshift_usage_limit#limit_type RedshiftUsageLimit#limit_type}. |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.breachAction">breachAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/redshift_usage_limit#breach_action RedshiftUsageLimit#breach_action}. |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/redshift_usage_limit#id RedshiftUsageLimit#id}. |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.period">period</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/redshift_usage_limit#period RedshiftUsageLimit#period}. |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/redshift_usage_limit#tags RedshiftUsageLimit#tags}. |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/redshift_usage_limit#tags_all RedshiftUsageLimit#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.amount"></a>

```java
public java.lang.Number getAmount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/redshift_usage_limit#amount RedshiftUsageLimit#amount}.

---

##### `clusterIdentifier`<sup>Required</sup> <a name="clusterIdentifier" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.clusterIdentifier"></a>

```java
public java.lang.String getClusterIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/redshift_usage_limit#cluster_identifier RedshiftUsageLimit#cluster_identifier}.

---

##### `featureType`<sup>Required</sup> <a name="featureType" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.featureType"></a>

```java
public java.lang.String getFeatureType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/redshift_usage_limit#feature_type RedshiftUsageLimit#feature_type}.

---

##### `limitType`<sup>Required</sup> <a name="limitType" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.limitType"></a>

```java
public java.lang.String getLimitType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/redshift_usage_limit#limit_type RedshiftUsageLimit#limit_type}.

---

##### `breachAction`<sup>Optional</sup> <a name="breachAction" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.breachAction"></a>

```java
public java.lang.String getBreachAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/redshift_usage_limit#breach_action RedshiftUsageLimit#breach_action}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/redshift_usage_limit#id RedshiftUsageLimit#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.period"></a>

```java
public java.lang.String getPeriod();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/redshift_usage_limit#period RedshiftUsageLimit#period}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/redshift_usage_limit#region RedshiftUsageLimit#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/redshift_usage_limit#tags RedshiftUsageLimit#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/redshift_usage_limit#tags_all RedshiftUsageLimit#tags_all}.

---




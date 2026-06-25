# `dataAwsArcregionswitchRoute53HealthChecks` Submodule <a name="`dataAwsArcregionswitchRoute53HealthChecks` Submodule" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsArcregionswitchRoute53HealthChecks <a name="DataAwsArcregionswitchRoute53HealthChecks" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/data-sources/arcregionswitch_route53_health_checks aws_arcregionswitch_route53_health_checks}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_arcregionswitch_route53_health_checks.DataAwsArcregionswitchRoute53HealthChecks;

DataAwsArcregionswitchRoute53HealthChecks.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .planArn(java.lang.String)
//  .region(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.Initializer.parameter.planArn">planArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/data-sources/arcregionswitch_route53_health_checks#plan_arn DataAwsArcregionswitchRoute53HealthChecks#plan_arn}. |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `planArn`<sup>Required</sup> <a name="planArn" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.Initializer.parameter.planArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/data-sources/arcregionswitch_route53_health_checks#plan_arn DataAwsArcregionswitchRoute53HealthChecks#plan_arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/data-sources/arcregionswitch_route53_health_checks#region DataAwsArcregionswitchRoute53HealthChecks#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.resetRegion"></a>

```java
public void resetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsArcregionswitchRoute53HealthChecks resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.isConstruct"></a>

```java
import io.cdktn.providers.aws.data_aws_arcregionswitch_route53_health_checks.DataAwsArcregionswitchRoute53HealthChecks;

DataAwsArcregionswitchRoute53HealthChecks.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.data_aws_arcregionswitch_route53_health_checks.DataAwsArcregionswitchRoute53HealthChecks;

DataAwsArcregionswitchRoute53HealthChecks.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.isTerraformDataSource"></a>

```java
import io.cdktn.providers.aws.data_aws_arcregionswitch_route53_health_checks.DataAwsArcregionswitchRoute53HealthChecks;

DataAwsArcregionswitchRoute53HealthChecks.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.data_aws_arcregionswitch_route53_health_checks.DataAwsArcregionswitchRoute53HealthChecks;

DataAwsArcregionswitchRoute53HealthChecks.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsArcregionswitchRoute53HealthChecks.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsArcregionswitchRoute53HealthChecks resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsArcregionswitchRoute53HealthChecks to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsArcregionswitchRoute53HealthChecks that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/data-sources/arcregionswitch_route53_health_checks#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsArcregionswitchRoute53HealthChecks to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.property.healthChecks">healthChecks</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksList">DataAwsArcregionswitchRoute53HealthChecksHealthChecksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.property.planArnInput">planArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.property.planArn">planArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `healthChecks`<sup>Required</sup> <a name="healthChecks" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.property.healthChecks"></a>

```java
public DataAwsArcregionswitchRoute53HealthChecksHealthChecksList getHealthChecks();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksList">DataAwsArcregionswitchRoute53HealthChecksHealthChecksList</a>

---

##### `planArnInput`<sup>Optional</sup> <a name="planArnInput" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.property.planArnInput"></a>

```java
public java.lang.String getPlanArnInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `planArn`<sup>Required</sup> <a name="planArn" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.property.planArn"></a>

```java
public java.lang.String getPlanArn();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsArcregionswitchRoute53HealthChecksConfig <a name="DataAwsArcregionswitchRoute53HealthChecksConfig" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_arcregionswitch_route53_health_checks.DataAwsArcregionswitchRoute53HealthChecksConfig;

DataAwsArcregionswitchRoute53HealthChecksConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .planArn(java.lang.String)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksConfig.property.planArn">planArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/data-sources/arcregionswitch_route53_health_checks#plan_arn DataAwsArcregionswitchRoute53HealthChecks#plan_arn}. |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `planArn`<sup>Required</sup> <a name="planArn" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksConfig.property.planArn"></a>

```java
public java.lang.String getPlanArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/data-sources/arcregionswitch_route53_health_checks#plan_arn DataAwsArcregionswitchRoute53HealthChecks#plan_arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/data-sources/arcregionswitch_route53_health_checks#region DataAwsArcregionswitchRoute53HealthChecks#region}

---

### DataAwsArcregionswitchRoute53HealthChecksHealthChecks <a name="DataAwsArcregionswitchRoute53HealthChecksHealthChecks" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecks.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_arcregionswitch_route53_health_checks.DataAwsArcregionswitchRoute53HealthChecksHealthChecks;

DataAwsArcregionswitchRoute53HealthChecksHealthChecks.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsArcregionswitchRoute53HealthChecksHealthChecksList <a name="DataAwsArcregionswitchRoute53HealthChecksHealthChecksList" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_arcregionswitch_route53_health_checks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksList;

new DataAwsArcregionswitchRoute53HealthChecksHealthChecksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksList.get"></a>

```java
public DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference <a name="DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_arcregionswitch_route53_health_checks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference;

new DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.property.healthCheckId">healthCheckId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.property.hostedZoneId">hostedZoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.property.recordName">recordName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecks">DataAwsArcregionswitchRoute53HealthChecksHealthChecks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `healthCheckId`<sup>Required</sup> <a name="healthCheckId" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.property.healthCheckId"></a>

```java
public java.lang.String getHealthCheckId();
```

- *Type:* java.lang.String

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.property.hostedZoneId"></a>

```java
public java.lang.String getHostedZoneId();
```

- *Type:* java.lang.String

---

##### `recordName`<sup>Required</sup> <a name="recordName" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.property.recordName"></a>

```java
public java.lang.String getRecordName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.property.internalValue"></a>

```java
public DataAwsArcregionswitchRoute53HealthChecksHealthChecks getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecks">DataAwsArcregionswitchRoute53HealthChecksHealthChecks</a>

---




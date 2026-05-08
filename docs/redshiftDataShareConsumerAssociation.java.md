# `redshiftDataShareConsumerAssociation` Submodule <a name="`redshiftDataShareConsumerAssociation` Submodule" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftDataShareConsumerAssociation <a name="RedshiftDataShareConsumerAssociation" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_data_share_consumer_association aws_redshift_data_share_consumer_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer"></a>

```java
import io.cdktn.providers.aws.redshift_data_share_consumer_association.RedshiftDataShareConsumerAssociation;

RedshiftDataShareConsumerAssociation.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dataShareArn(java.lang.String)
//  .allowWrites(java.lang.Boolean|IResolvable)
//  .associateEntireAccount(java.lang.Boolean|IResolvable)
//  .consumerArn(java.lang.String)
//  .consumerRegion(java.lang.String)
//  .region(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.dataShareArn">dataShareArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_data_share_consumer_association#data_share_arn RedshiftDataShareConsumerAssociation#data_share_arn}. |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.allowWrites">allowWrites</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_data_share_consumer_association#allow_writes RedshiftDataShareConsumerAssociation#allow_writes}. |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.associateEntireAccount">associateEntireAccount</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_data_share_consumer_association#associate_entire_account RedshiftDataShareConsumerAssociation#associate_entire_account}. |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.consumerArn">consumerArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_data_share_consumer_association#consumer_arn RedshiftDataShareConsumerAssociation#consumer_arn}. |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.consumerRegion">consumerRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_data_share_consumer_association#consumer_region RedshiftDataShareConsumerAssociation#consumer_region}. |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dataShareArn`<sup>Required</sup> <a name="dataShareArn" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.dataShareArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_data_share_consumer_association#data_share_arn RedshiftDataShareConsumerAssociation#data_share_arn}.

---

##### `allowWrites`<sup>Optional</sup> <a name="allowWrites" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.allowWrites"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_data_share_consumer_association#allow_writes RedshiftDataShareConsumerAssociation#allow_writes}.

---

##### `associateEntireAccount`<sup>Optional</sup> <a name="associateEntireAccount" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.associateEntireAccount"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_data_share_consumer_association#associate_entire_account RedshiftDataShareConsumerAssociation#associate_entire_account}.

---

##### `consumerArn`<sup>Optional</sup> <a name="consumerArn" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.consumerArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_data_share_consumer_association#consumer_arn RedshiftDataShareConsumerAssociation#consumer_arn}.

---

##### `consumerRegion`<sup>Optional</sup> <a name="consumerRegion" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.consumerRegion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_data_share_consumer_association#consumer_region RedshiftDataShareConsumerAssociation#consumer_region}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_data_share_consumer_association#region RedshiftDataShareConsumerAssociation#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.resetAllowWrites">resetAllowWrites</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.resetAssociateEntireAccount">resetAssociateEntireAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.resetConsumerArn">resetConsumerArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.resetConsumerRegion">resetConsumerRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAllowWrites` <a name="resetAllowWrites" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.resetAllowWrites"></a>

```java
public void resetAllowWrites()
```

##### `resetAssociateEntireAccount` <a name="resetAssociateEntireAccount" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.resetAssociateEntireAccount"></a>

```java
public void resetAssociateEntireAccount()
```

##### `resetConsumerArn` <a name="resetConsumerArn" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.resetConsumerArn"></a>

```java
public void resetConsumerArn()
```

##### `resetConsumerRegion` <a name="resetConsumerRegion" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.resetConsumerRegion"></a>

```java
public void resetConsumerRegion()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.resetRegion"></a>

```java
public void resetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a RedshiftDataShareConsumerAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.isConstruct"></a>

```java
import io.cdktn.providers.aws.redshift_data_share_consumer_association.RedshiftDataShareConsumerAssociation;

RedshiftDataShareConsumerAssociation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.redshift_data_share_consumer_association.RedshiftDataShareConsumerAssociation;

RedshiftDataShareConsumerAssociation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.redshift_data_share_consumer_association.RedshiftDataShareConsumerAssociation;

RedshiftDataShareConsumerAssociation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.redshift_data_share_consumer_association.RedshiftDataShareConsumerAssociation;

RedshiftDataShareConsumerAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),RedshiftDataShareConsumerAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a RedshiftDataShareConsumerAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the RedshiftDataShareConsumerAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing RedshiftDataShareConsumerAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_data_share_consumer_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the RedshiftDataShareConsumerAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.managedBy">managedBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.producerArn">producerArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.allowWritesInput">allowWritesInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.associateEntireAccountInput">associateEntireAccountInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.consumerArnInput">consumerArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.consumerRegionInput">consumerRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.dataShareArnInput">dataShareArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.allowWrites">allowWrites</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.associateEntireAccount">associateEntireAccount</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.consumerArn">consumerArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.consumerRegion">consumerRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.dataShareArn">dataShareArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `managedBy`<sup>Required</sup> <a name="managedBy" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.managedBy"></a>

```java
public java.lang.String getManagedBy();
```

- *Type:* java.lang.String

---

##### `producerArn`<sup>Required</sup> <a name="producerArn" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.producerArn"></a>

```java
public java.lang.String getProducerArn();
```

- *Type:* java.lang.String

---

##### `allowWritesInput`<sup>Optional</sup> <a name="allowWritesInput" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.allowWritesInput"></a>

```java
public java.lang.Boolean|IResolvable getAllowWritesInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `associateEntireAccountInput`<sup>Optional</sup> <a name="associateEntireAccountInput" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.associateEntireAccountInput"></a>

```java
public java.lang.Boolean|IResolvable getAssociateEntireAccountInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `consumerArnInput`<sup>Optional</sup> <a name="consumerArnInput" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.consumerArnInput"></a>

```java
public java.lang.String getConsumerArnInput();
```

- *Type:* java.lang.String

---

##### `consumerRegionInput`<sup>Optional</sup> <a name="consumerRegionInput" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.consumerRegionInput"></a>

```java
public java.lang.String getConsumerRegionInput();
```

- *Type:* java.lang.String

---

##### `dataShareArnInput`<sup>Optional</sup> <a name="dataShareArnInput" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.dataShareArnInput"></a>

```java
public java.lang.String getDataShareArnInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `allowWrites`<sup>Required</sup> <a name="allowWrites" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.allowWrites"></a>

```java
public java.lang.Boolean|IResolvable getAllowWrites();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `associateEntireAccount`<sup>Required</sup> <a name="associateEntireAccount" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.associateEntireAccount"></a>

```java
public java.lang.Boolean|IResolvable getAssociateEntireAccount();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `consumerArn`<sup>Required</sup> <a name="consumerArn" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.consumerArn"></a>

```java
public java.lang.String getConsumerArn();
```

- *Type:* java.lang.String

---

##### `consumerRegion`<sup>Required</sup> <a name="consumerRegion" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.consumerRegion"></a>

```java
public java.lang.String getConsumerRegion();
```

- *Type:* java.lang.String

---

##### `dataShareArn`<sup>Required</sup> <a name="dataShareArn" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.dataShareArn"></a>

```java
public java.lang.String getDataShareArn();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftDataShareConsumerAssociationConfig <a name="RedshiftDataShareConsumerAssociationConfig" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.redshift_data_share_consumer_association.RedshiftDataShareConsumerAssociationConfig;

RedshiftDataShareConsumerAssociationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dataShareArn(java.lang.String)
//  .allowWrites(java.lang.Boolean|IResolvable)
//  .associateEntireAccount(java.lang.Boolean|IResolvable)
//  .consumerArn(java.lang.String)
//  .consumerRegion(java.lang.String)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.dataShareArn">dataShareArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_data_share_consumer_association#data_share_arn RedshiftDataShareConsumerAssociation#data_share_arn}. |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.allowWrites">allowWrites</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_data_share_consumer_association#allow_writes RedshiftDataShareConsumerAssociation#allow_writes}. |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.associateEntireAccount">associateEntireAccount</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_data_share_consumer_association#associate_entire_account RedshiftDataShareConsumerAssociation#associate_entire_account}. |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.consumerArn">consumerArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_data_share_consumer_association#consumer_arn RedshiftDataShareConsumerAssociation#consumer_arn}. |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.consumerRegion">consumerRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_data_share_consumer_association#consumer_region RedshiftDataShareConsumerAssociation#consumer_region}. |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dataShareArn`<sup>Required</sup> <a name="dataShareArn" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.dataShareArn"></a>

```java
public java.lang.String getDataShareArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_data_share_consumer_association#data_share_arn RedshiftDataShareConsumerAssociation#data_share_arn}.

---

##### `allowWrites`<sup>Optional</sup> <a name="allowWrites" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.allowWrites"></a>

```java
public java.lang.Boolean|IResolvable getAllowWrites();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_data_share_consumer_association#allow_writes RedshiftDataShareConsumerAssociation#allow_writes}.

---

##### `associateEntireAccount`<sup>Optional</sup> <a name="associateEntireAccount" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.associateEntireAccount"></a>

```java
public java.lang.Boolean|IResolvable getAssociateEntireAccount();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_data_share_consumer_association#associate_entire_account RedshiftDataShareConsumerAssociation#associate_entire_account}.

---

##### `consumerArn`<sup>Optional</sup> <a name="consumerArn" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.consumerArn"></a>

```java
public java.lang.String getConsumerArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_data_share_consumer_association#consumer_arn RedshiftDataShareConsumerAssociation#consumer_arn}.

---

##### `consumerRegion`<sup>Optional</sup> <a name="consumerRegion" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.consumerRegion"></a>

```java
public java.lang.String getConsumerRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_data_share_consumer_association#consumer_region RedshiftDataShareConsumerAssociation#consumer_region}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_data_share_consumer_association#region RedshiftDataShareConsumerAssociation#region}

---




# `pinpointsmsvoicev2Keyword` Submodule <a name="`pinpointsmsvoicev2Keyword` Submodule" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Pinpointsmsvoicev2Keyword <a name="Pinpointsmsvoicev2Keyword" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/pinpointsmsvoicev2_keyword aws_pinpointsmsvoicev2_keyword}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.Initializer"></a>

```java
import io.cdktn.providers.aws.pinpointsmsvoicev2_keyword.Pinpointsmsvoicev2Keyword;

Pinpointsmsvoicev2Keyword.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .keyword(java.lang.String)
    .keywordMessage(java.lang.String)
    .originationIdentityArn(java.lang.String)
//  .keywordAction(java.lang.String)
//  .region(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.Initializer.parameter.keyword">keyword</a></code> | <code>java.lang.String</code> | Keyword to configure. 1-30 characters, upper-case, and cannot start or end with a space. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.Initializer.parameter.keywordMessage">keywordMessage</a></code> | <code>java.lang.String</code> | Message to send when the keyword is received. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.Initializer.parameter.originationIdentityArn">originationIdentityArn</a></code> | <code>java.lang.String</code> | ARN of the origination identity (phone number or pool) to attach the keyword to. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.Initializer.parameter.keywordAction">keywordAction</a></code> | <code>java.lang.String</code> | Action to perform when the keyword is received. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `keyword`<sup>Required</sup> <a name="keyword" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.Initializer.parameter.keyword"></a>

- *Type:* java.lang.String

Keyword to configure. 1-30 characters, upper-case, and cannot start or end with a space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/pinpointsmsvoicev2_keyword#keyword Pinpointsmsvoicev2Keyword#keyword}

---

##### `keywordMessage`<sup>Required</sup> <a name="keywordMessage" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.Initializer.parameter.keywordMessage"></a>

- *Type:* java.lang.String

Message to send when the keyword is received.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/pinpointsmsvoicev2_keyword#keyword_message Pinpointsmsvoicev2Keyword#keyword_message}

---

##### `originationIdentityArn`<sup>Required</sup> <a name="originationIdentityArn" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.Initializer.parameter.originationIdentityArn"></a>

- *Type:* java.lang.String

ARN of the origination identity (phone number or pool) to attach the keyword to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/pinpointsmsvoicev2_keyword#origination_identity_arn Pinpointsmsvoicev2Keyword#origination_identity_arn}

---

##### `keywordAction`<sup>Optional</sup> <a name="keywordAction" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.Initializer.parameter.keywordAction"></a>

- *Type:* java.lang.String

Action to perform when the keyword is received.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/pinpointsmsvoicev2_keyword#keyword_action Pinpointsmsvoicev2Keyword#keyword_action}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/pinpointsmsvoicev2_keyword#region Pinpointsmsvoicev2Keyword#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.resetKeywordAction">resetKeywordAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetKeywordAction` <a name="resetKeywordAction" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.resetKeywordAction"></a>

```java
public void resetKeywordAction()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.resetRegion"></a>

```java
public void resetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Pinpointsmsvoicev2Keyword resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.isConstruct"></a>

```java
import io.cdktn.providers.aws.pinpointsmsvoicev2_keyword.Pinpointsmsvoicev2Keyword;

Pinpointsmsvoicev2Keyword.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.pinpointsmsvoicev2_keyword.Pinpointsmsvoicev2Keyword;

Pinpointsmsvoicev2Keyword.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.pinpointsmsvoicev2_keyword.Pinpointsmsvoicev2Keyword;

Pinpointsmsvoicev2Keyword.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.pinpointsmsvoicev2_keyword.Pinpointsmsvoicev2Keyword;

Pinpointsmsvoicev2Keyword.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Pinpointsmsvoicev2Keyword.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Pinpointsmsvoicev2Keyword resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Pinpointsmsvoicev2Keyword to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Pinpointsmsvoicev2Keyword that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/pinpointsmsvoicev2_keyword#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Pinpointsmsvoicev2Keyword to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.keywordActionInput">keywordActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.keywordInput">keywordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.keywordMessageInput">keywordMessageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.originationIdentityArnInput">originationIdentityArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.keyword">keyword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.keywordAction">keywordAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.keywordMessage">keywordMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.originationIdentityArn">originationIdentityArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `keywordActionInput`<sup>Optional</sup> <a name="keywordActionInput" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.keywordActionInput"></a>

```java
public java.lang.String getKeywordActionInput();
```

- *Type:* java.lang.String

---

##### `keywordInput`<sup>Optional</sup> <a name="keywordInput" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.keywordInput"></a>

```java
public java.lang.String getKeywordInput();
```

- *Type:* java.lang.String

---

##### `keywordMessageInput`<sup>Optional</sup> <a name="keywordMessageInput" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.keywordMessageInput"></a>

```java
public java.lang.String getKeywordMessageInput();
```

- *Type:* java.lang.String

---

##### `originationIdentityArnInput`<sup>Optional</sup> <a name="originationIdentityArnInput" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.originationIdentityArnInput"></a>

```java
public java.lang.String getOriginationIdentityArnInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `keyword`<sup>Required</sup> <a name="keyword" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.keyword"></a>

```java
public java.lang.String getKeyword();
```

- *Type:* java.lang.String

---

##### `keywordAction`<sup>Required</sup> <a name="keywordAction" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.keywordAction"></a>

```java
public java.lang.String getKeywordAction();
```

- *Type:* java.lang.String

---

##### `keywordMessage`<sup>Required</sup> <a name="keywordMessage" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.keywordMessage"></a>

```java
public java.lang.String getKeywordMessage();
```

- *Type:* java.lang.String

---

##### `originationIdentityArn`<sup>Required</sup> <a name="originationIdentityArn" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.originationIdentityArn"></a>

```java
public java.lang.String getOriginationIdentityArn();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2Keyword.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Pinpointsmsvoicev2KeywordConfig <a name="Pinpointsmsvoicev2KeywordConfig" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2KeywordConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2KeywordConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.pinpointsmsvoicev2_keyword.Pinpointsmsvoicev2KeywordConfig;

Pinpointsmsvoicev2KeywordConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .keyword(java.lang.String)
    .keywordMessage(java.lang.String)
    .originationIdentityArn(java.lang.String)
//  .keywordAction(java.lang.String)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2KeywordConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2KeywordConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2KeywordConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2KeywordConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2KeywordConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2KeywordConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2KeywordConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2KeywordConfig.property.keyword">keyword</a></code> | <code>java.lang.String</code> | Keyword to configure. 1-30 characters, upper-case, and cannot start or end with a space. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2KeywordConfig.property.keywordMessage">keywordMessage</a></code> | <code>java.lang.String</code> | Message to send when the keyword is received. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2KeywordConfig.property.originationIdentityArn">originationIdentityArn</a></code> | <code>java.lang.String</code> | ARN of the origination identity (phone number or pool) to attach the keyword to. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2KeywordConfig.property.keywordAction">keywordAction</a></code> | <code>java.lang.String</code> | Action to perform when the keyword is received. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2KeywordConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2KeywordConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2KeywordConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2KeywordConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2KeywordConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2KeywordConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2KeywordConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2KeywordConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `keyword`<sup>Required</sup> <a name="keyword" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2KeywordConfig.property.keyword"></a>

```java
public java.lang.String getKeyword();
```

- *Type:* java.lang.String

Keyword to configure. 1-30 characters, upper-case, and cannot start or end with a space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/pinpointsmsvoicev2_keyword#keyword Pinpointsmsvoicev2Keyword#keyword}

---

##### `keywordMessage`<sup>Required</sup> <a name="keywordMessage" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2KeywordConfig.property.keywordMessage"></a>

```java
public java.lang.String getKeywordMessage();
```

- *Type:* java.lang.String

Message to send when the keyword is received.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/pinpointsmsvoicev2_keyword#keyword_message Pinpointsmsvoicev2Keyword#keyword_message}

---

##### `originationIdentityArn`<sup>Required</sup> <a name="originationIdentityArn" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2KeywordConfig.property.originationIdentityArn"></a>

```java
public java.lang.String getOriginationIdentityArn();
```

- *Type:* java.lang.String

ARN of the origination identity (phone number or pool) to attach the keyword to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/pinpointsmsvoicev2_keyword#origination_identity_arn Pinpointsmsvoicev2Keyword#origination_identity_arn}

---

##### `keywordAction`<sup>Optional</sup> <a name="keywordAction" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2KeywordConfig.property.keywordAction"></a>

```java
public java.lang.String getKeywordAction();
```

- *Type:* java.lang.String

Action to perform when the keyword is received.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/pinpointsmsvoicev2_keyword#keyword_action Pinpointsmsvoicev2Keyword#keyword_action}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.pinpointsmsvoicev2Keyword.Pinpointsmsvoicev2KeywordConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/pinpointsmsvoicev2_keyword#region Pinpointsmsvoicev2Keyword#region}

---




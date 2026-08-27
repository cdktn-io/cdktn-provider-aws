# `ephemeralAwsSecretsmanagerSecretVersion` Submodule <a name="`ephemeralAwsSecretsmanagerSecretVersion` Submodule" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralAwsSecretsmanagerSecretVersion <a name="EphemeralAwsSecretsmanagerSecretVersion" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/secretsmanager_secret_version aws_secretsmanager_secret_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.Initializer"></a>

```java
import io.cdktn.providers.aws.ephemeral_aws_secretsmanager_secret_version.EphemeralAwsSecretsmanagerSecretVersion;

EphemeralAwsSecretsmanagerSecretVersion.Builder.create(Construct scope, java.lang.String id)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformEphemeralResourceLifecycle)
//  .provider(TerraformProvider)
    .secretId(java.lang.String)
//  .region(java.lang.String)
//  .versionId(java.lang.String)
//  .versionStage(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.Initializer.parameter.secretId">secretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/secretsmanager_secret_version#secret_id EphemeralAwsSecretsmanagerSecretVersion#secret_id}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.Initializer.parameter.versionId">versionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/secretsmanager_secret_version#version_id EphemeralAwsSecretsmanagerSecretVersion#version_id}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.Initializer.parameter.versionStage">versionStage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/secretsmanager_secret_version#version_stage EphemeralAwsSecretsmanagerSecretVersion#version_stage}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.Initializer.parameter.secretId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/secretsmanager_secret_version#secret_id EphemeralAwsSecretsmanagerSecretVersion#secret_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/secretsmanager_secret_version#region EphemeralAwsSecretsmanagerSecretVersion#region}

---

##### `versionId`<sup>Optional</sup> <a name="versionId" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.Initializer.parameter.versionId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/secretsmanager_secret_version#version_id EphemeralAwsSecretsmanagerSecretVersion#version_id}.

---

##### `versionStage`<sup>Optional</sup> <a name="versionStage" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.Initializer.parameter.versionStage"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/secretsmanager_secret_version#version_stage EphemeralAwsSecretsmanagerSecretVersion#version_stage}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.toTerraform">toTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.resetVersionId">resetVersionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.resetVersionStage">resetVersionStage</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this ephemeral resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetVersionId` <a name="resetVersionId" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.resetVersionId"></a>

```java
public void resetVersionId()
```

##### `resetVersionStage` <a name="resetVersionStage" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.resetVersionStage"></a>

```java
public void resetVersionStage()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.isTerraformEphemeralResource">isTerraformEphemeralResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.isConstruct"></a>

```java
import io.cdktn.providers.aws.ephemeral_aws_secretsmanager_secret_version.EphemeralAwsSecretsmanagerSecretVersion;

EphemeralAwsSecretsmanagerSecretVersion.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.ephemeral_aws_secretsmanager_secret_version.EphemeralAwsSecretsmanagerSecretVersion;

EphemeralAwsSecretsmanagerSecretVersion.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformEphemeralResource` <a name="isTerraformEphemeralResource" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.isTerraformEphemeralResource"></a>

```java
import io.cdktn.providers.aws.ephemeral_aws_secretsmanager_secret_version.EphemeralAwsSecretsmanagerSecretVersion;

EphemeralAwsSecretsmanagerSecretVersion.isTerraformEphemeralResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.createdDate">createdDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.secretBinary">secretBinary</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.secretString">secretString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.versionStages">versionStages</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.secretIdInput">secretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.versionIdInput">versionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.versionStageInput">versionStageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.secretId">secretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.versionId">versionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.versionStage">versionStage</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.lifecycle"></a>

```java
public TerraformEphemeralResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `createdDate`<sup>Required</sup> <a name="createdDate" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.createdDate"></a>

```java
public java.lang.String getCreatedDate();
```

- *Type:* java.lang.String

---

##### `secretBinary`<sup>Required</sup> <a name="secretBinary" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.secretBinary"></a>

```java
public java.lang.String getSecretBinary();
```

- *Type:* java.lang.String

---

##### `secretString`<sup>Required</sup> <a name="secretString" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.secretString"></a>

```java
public java.lang.String getSecretString();
```

- *Type:* java.lang.String

---

##### `versionStages`<sup>Required</sup> <a name="versionStages" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.versionStages"></a>

```java
public java.util.List<java.lang.String> getVersionStages();
```

- *Type:* java.util.List<java.lang.String>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `secretIdInput`<sup>Optional</sup> <a name="secretIdInput" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.secretIdInput"></a>

```java
public java.lang.String getSecretIdInput();
```

- *Type:* java.lang.String

---

##### `versionIdInput`<sup>Optional</sup> <a name="versionIdInput" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.versionIdInput"></a>

```java
public java.lang.String getVersionIdInput();
```

- *Type:* java.lang.String

---

##### `versionStageInput`<sup>Optional</sup> <a name="versionStageInput" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.versionStageInput"></a>

```java
public java.lang.String getVersionStageInput();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.secretId"></a>

```java
public java.lang.String getSecretId();
```

- *Type:* java.lang.String

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.versionId"></a>

```java
public java.lang.String getVersionId();
```

- *Type:* java.lang.String

---

##### `versionStage`<sup>Required</sup> <a name="versionStage" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.versionStage"></a>

```java
public java.lang.String getVersionStage();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralAwsSecretsmanagerSecretVersionConfig <a name="EphemeralAwsSecretsmanagerSecretVersionConfig" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.ephemeral_aws_secretsmanager_secret_version.EphemeralAwsSecretsmanagerSecretVersionConfig;

EphemeralAwsSecretsmanagerSecretVersionConfig.builder()
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformEphemeralResourceLifecycle)
//  .provider(TerraformProvider)
    .secretId(java.lang.String)
//  .region(java.lang.String)
//  .versionId(java.lang.String)
//  .versionStage(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig.property.secretId">secretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/secretsmanager_secret_version#secret_id EphemeralAwsSecretsmanagerSecretVersion#secret_id}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig.property.versionId">versionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/secretsmanager_secret_version#version_id EphemeralAwsSecretsmanagerSecretVersion#version_id}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig.property.versionStage">versionStage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/secretsmanager_secret_version#version_stage EphemeralAwsSecretsmanagerSecretVersion#version_stage}. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig.property.lifecycle"></a>

```java
public TerraformEphemeralResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig.property.secretId"></a>

```java
public java.lang.String getSecretId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/secretsmanager_secret_version#secret_id EphemeralAwsSecretsmanagerSecretVersion#secret_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/secretsmanager_secret_version#region EphemeralAwsSecretsmanagerSecretVersion#region}

---

##### `versionId`<sup>Optional</sup> <a name="versionId" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig.property.versionId"></a>

```java
public java.lang.String getVersionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/secretsmanager_secret_version#version_id EphemeralAwsSecretsmanagerSecretVersion#version_id}.

---

##### `versionStage`<sup>Optional</sup> <a name="versionStage" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig.property.versionStage"></a>

```java
public java.lang.String getVersionStage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/secretsmanager_secret_version#version_stage EphemeralAwsSecretsmanagerSecretVersion#version_stage}.

---




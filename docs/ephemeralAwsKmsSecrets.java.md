# `ephemeralAwsKmsSecrets` Submodule <a name="`ephemeralAwsKmsSecrets` Submodule" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralAwsKmsSecrets <a name="EphemeralAwsKmsSecrets" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/kms_secrets aws_kms_secrets}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.Initializer"></a>

```java
import io.cdktn.providers.aws.ephemeral_aws_kms_secrets.EphemeralAwsKmsSecrets;

EphemeralAwsKmsSecrets.Builder.create(Construct scope, java.lang.String id)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformEphemeralResourceLifecycle)
//  .provider(TerraformProvider)
//  .region(java.lang.String)
//  .secret(IResolvable|java.util.List<EphemeralAwsKmsSecretsSecret>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.Initializer.parameter.secret">secret</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret">EphemeralAwsKmsSecretsSecret</a>></code> | secret block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/kms_secrets#region EphemeralAwsKmsSecrets#region}

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.Initializer.parameter.secret"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret">EphemeralAwsKmsSecretsSecret</a>>

secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/kms_secrets#secret EphemeralAwsKmsSecrets#secret}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.toTerraform">toTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.putSecret">putSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.resetSecret">resetSecret</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this ephemeral resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putSecret` <a name="putSecret" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.putSecret"></a>

```java
public void putSecret(IResolvable|java.util.List<EphemeralAwsKmsSecretsSecret> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.putSecret.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret">EphemeralAwsKmsSecretsSecret</a>>

---

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetSecret` <a name="resetSecret" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.resetSecret"></a>

```java
public void resetSecret()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.isTerraformEphemeralResource">isTerraformEphemeralResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.isConstruct"></a>

```java
import io.cdktn.providers.aws.ephemeral_aws_kms_secrets.EphemeralAwsKmsSecrets;

EphemeralAwsKmsSecrets.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.ephemeral_aws_kms_secrets.EphemeralAwsKmsSecrets;

EphemeralAwsKmsSecrets.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformEphemeralResource` <a name="isTerraformEphemeralResource" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.isTerraformEphemeralResource"></a>

```java
import io.cdktn.providers.aws.ephemeral_aws_kms_secrets.EphemeralAwsKmsSecrets;

EphemeralAwsKmsSecrets.isTerraformEphemeralResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.plaintext">plaintext</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.secret">secret</a></code> | <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList">EphemeralAwsKmsSecretsSecretList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.secretInput">secretInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret">EphemeralAwsKmsSecretsSecret</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.lifecycle"></a>

```java
public TerraformEphemeralResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `plaintext`<sup>Required</sup> <a name="plaintext" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.plaintext"></a>

```java
public StringMap getPlaintext();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.secret"></a>

```java
public EphemeralAwsKmsSecretsSecretList getSecret();
```

- *Type:* <a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList">EphemeralAwsKmsSecretsSecretList</a>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.secretInput"></a>

```java
public IResolvable|java.util.List<EphemeralAwsKmsSecretsSecret> getSecretInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret">EphemeralAwsKmsSecretsSecret</a>>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralAwsKmsSecretsConfig <a name="EphemeralAwsKmsSecretsConfig" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.ephemeral_aws_kms_secrets.EphemeralAwsKmsSecretsConfig;

EphemeralAwsKmsSecretsConfig.builder()
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformEphemeralResourceLifecycle)
//  .provider(TerraformProvider)
//  .region(java.lang.String)
//  .secret(IResolvable|java.util.List<EphemeralAwsKmsSecretsSecret>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig.property.secret">secret</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret">EphemeralAwsKmsSecretsSecret</a>></code> | secret block. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig.property.lifecycle"></a>

```java
public TerraformEphemeralResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/kms_secrets#region EphemeralAwsKmsSecrets#region}

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig.property.secret"></a>

```java
public IResolvable|java.util.List<EphemeralAwsKmsSecretsSecret> getSecret();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret">EphemeralAwsKmsSecretsSecret</a>>

secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/kms_secrets#secret EphemeralAwsKmsSecrets#secret}

---

### EphemeralAwsKmsSecretsSecret <a name="EphemeralAwsKmsSecretsSecret" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret.Initializer"></a>

```java
import io.cdktn.providers.aws.ephemeral_aws_kms_secrets.EphemeralAwsKmsSecretsSecret;

EphemeralAwsKmsSecretsSecret.builder()
    .name(java.lang.String)
    .payload(java.lang.String)
//  .context(java.util.Map<java.lang.String, java.lang.String>)
//  .encryptionAlgorithm(java.lang.String)
//  .grantTokens(java.util.List<java.lang.String>)
//  .keyId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/kms_secrets#name EphemeralAwsKmsSecrets#name}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret.property.payload">payload</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/kms_secrets#payload EphemeralAwsKmsSecrets#payload}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret.property.context">context</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/kms_secrets#context EphemeralAwsKmsSecrets#context}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret.property.encryptionAlgorithm">encryptionAlgorithm</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/kms_secrets#encryption_algorithm EphemeralAwsKmsSecrets#encryption_algorithm}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret.property.grantTokens">grantTokens</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/kms_secrets#grant_tokens EphemeralAwsKmsSecrets#grant_tokens}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret.property.keyId">keyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/kms_secrets#key_id EphemeralAwsKmsSecrets#key_id}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/kms_secrets#name EphemeralAwsKmsSecrets#name}.

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret.property.payload"></a>

```java
public java.lang.String getPayload();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/kms_secrets#payload EphemeralAwsKmsSecrets#payload}.

---

##### `context`<sup>Optional</sup> <a name="context" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret.property.context"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getContext();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/kms_secrets#context EphemeralAwsKmsSecrets#context}.

---

##### `encryptionAlgorithm`<sup>Optional</sup> <a name="encryptionAlgorithm" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret.property.encryptionAlgorithm"></a>

```java
public java.lang.String getEncryptionAlgorithm();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/kms_secrets#encryption_algorithm EphemeralAwsKmsSecrets#encryption_algorithm}.

---

##### `grantTokens`<sup>Optional</sup> <a name="grantTokens" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret.property.grantTokens"></a>

```java
public java.util.List<java.lang.String> getGrantTokens();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/kms_secrets#grant_tokens EphemeralAwsKmsSecrets#grant_tokens}.

---

##### `keyId`<sup>Optional</sup> <a name="keyId" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret.property.keyId"></a>

```java
public java.lang.String getKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/kms_secrets#key_id EphemeralAwsKmsSecrets#key_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### EphemeralAwsKmsSecretsSecretList <a name="EphemeralAwsKmsSecretsSecretList" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.Initializer"></a>

```java
import io.cdktn.providers.aws.ephemeral_aws_kms_secrets.EphemeralAwsKmsSecretsSecretList;

new EphemeralAwsKmsSecretsSecretList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.get"></a>

```java
public EphemeralAwsKmsSecretsSecretOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret">EphemeralAwsKmsSecretsSecret</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.property.internalValue"></a>

```java
public IResolvable|java.util.List<EphemeralAwsKmsSecretsSecret> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret">EphemeralAwsKmsSecretsSecret</a>>

---


### EphemeralAwsKmsSecretsSecretOutputReference <a name="EphemeralAwsKmsSecretsSecretOutputReference" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.ephemeral_aws_kms_secrets.EphemeralAwsKmsSecretsSecretOutputReference;

new EphemeralAwsKmsSecretsSecretOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.resetContext">resetContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.resetEncryptionAlgorithm">resetEncryptionAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.resetGrantTokens">resetGrantTokens</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.resetKeyId">resetKeyId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContext` <a name="resetContext" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.resetContext"></a>

```java
public void resetContext()
```

##### `resetEncryptionAlgorithm` <a name="resetEncryptionAlgorithm" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.resetEncryptionAlgorithm"></a>

```java
public void resetEncryptionAlgorithm()
```

##### `resetGrantTokens` <a name="resetGrantTokens" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.resetGrantTokens"></a>

```java
public void resetGrantTokens()
```

##### `resetKeyId` <a name="resetKeyId" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.resetKeyId"></a>

```java
public void resetKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.contextInput">contextInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.encryptionAlgorithmInput">encryptionAlgorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.grantTokensInput">grantTokensInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.keyIdInput">keyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.payloadInput">payloadInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.context">context</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.encryptionAlgorithm">encryptionAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.grantTokens">grantTokens</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.keyId">keyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.payload">payload</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret">EphemeralAwsKmsSecretsSecret</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contextInput`<sup>Optional</sup> <a name="contextInput" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.contextInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getContextInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `encryptionAlgorithmInput`<sup>Optional</sup> <a name="encryptionAlgorithmInput" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.encryptionAlgorithmInput"></a>

```java
public java.lang.String getEncryptionAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `grantTokensInput`<sup>Optional</sup> <a name="grantTokensInput" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.grantTokensInput"></a>

```java
public java.util.List<java.lang.String> getGrantTokensInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `keyIdInput`<sup>Optional</sup> <a name="keyIdInput" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.keyIdInput"></a>

```java
public java.lang.String getKeyIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `payloadInput`<sup>Optional</sup> <a name="payloadInput" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.payloadInput"></a>

```java
public java.lang.String getPayloadInput();
```

- *Type:* java.lang.String

---

##### `context`<sup>Required</sup> <a name="context" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.context"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getContext();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `encryptionAlgorithm`<sup>Required</sup> <a name="encryptionAlgorithm" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.encryptionAlgorithm"></a>

```java
public java.lang.String getEncryptionAlgorithm();
```

- *Type:* java.lang.String

---

##### `grantTokens`<sup>Required</sup> <a name="grantTokens" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.grantTokens"></a>

```java
public java.util.List<java.lang.String> getGrantTokens();
```

- *Type:* java.util.List<java.lang.String>

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.keyId"></a>

```java
public java.lang.String getKeyId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.payload"></a>

```java
public java.lang.String getPayload();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.internalValue"></a>

```java
public IResolvable|EphemeralAwsKmsSecretsSecret getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret">EphemeralAwsKmsSecretsSecret</a>

---




# `ephemeralAwsStsWebIdentityToken` Submodule <a name="`ephemeralAwsStsWebIdentityToken` Submodule" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralAwsStsWebIdentityToken <a name="EphemeralAwsStsWebIdentityToken" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/sts_web_identity_token aws_sts_web_identity_token}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.Initializer"></a>

```java
import io.cdktn.providers.aws.ephemeral_aws_sts_web_identity_token.EphemeralAwsStsWebIdentityToken;

EphemeralAwsStsWebIdentityToken.Builder.create(Construct scope, java.lang.String id)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformEphemeralResourceLifecycle)
//  .provider(TerraformProvider)
    .audience(java.util.List<java.lang.String>)
    .signingAlgorithm(java.lang.String)
//  .durationSeconds(java.lang.Number)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.Initializer.parameter.audience">audience</a></code> | <code>java.util.List<java.lang.String></code> | The intended recipients of the token (populates the `aud` claim in the JWT). |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.Initializer.parameter.signingAlgorithm">signingAlgorithm</a></code> | <code>java.lang.String</code> | The cryptographic algorithm to use for signing the JWT. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.Initializer.parameter.durationSeconds">durationSeconds</a></code> | <code>java.lang.Number</code> | The duration, in seconds, for which the JWT will remain valid. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/sts_web_identity_token#tags EphemeralAwsStsWebIdentityToken#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.Initializer.parameter.audience"></a>

- *Type:* java.util.List<java.lang.String>

The intended recipients of the token (populates the `aud` claim in the JWT).

Must contain between 1 and 10 items.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/sts_web_identity_token#audience EphemeralAwsStsWebIdentityToken#audience}

---

##### `signingAlgorithm`<sup>Required</sup> <a name="signingAlgorithm" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.Initializer.parameter.signingAlgorithm"></a>

- *Type:* java.lang.String

The cryptographic algorithm to use for signing the JWT.

Valid values are `RS256` (RSA with SHA-256) and `ES384` (ECDSA using P-384 curve with SHA-384).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/sts_web_identity_token#signing_algorithm EphemeralAwsStsWebIdentityToken#signing_algorithm}

---

##### `durationSeconds`<sup>Optional</sup> <a name="durationSeconds" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.Initializer.parameter.durationSeconds"></a>

- *Type:* java.lang.Number

The duration, in seconds, for which the JWT will remain valid.

Value can range from 60 to 3600 seconds. Default is 300 seconds (5 minutes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/sts_web_identity_token#duration_seconds EphemeralAwsStsWebIdentityToken#duration_seconds}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/sts_web_identity_token#tags EphemeralAwsStsWebIdentityToken#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.toTerraform">toTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.resetDurationSeconds">resetDurationSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this ephemeral resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetDurationSeconds` <a name="resetDurationSeconds" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.resetDurationSeconds"></a>

```java
public void resetDurationSeconds()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.isTerraformEphemeralResource">isTerraformEphemeralResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.isConstruct"></a>

```java
import io.cdktn.providers.aws.ephemeral_aws_sts_web_identity_token.EphemeralAwsStsWebIdentityToken;

EphemeralAwsStsWebIdentityToken.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.ephemeral_aws_sts_web_identity_token.EphemeralAwsStsWebIdentityToken;

EphemeralAwsStsWebIdentityToken.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformEphemeralResource` <a name="isTerraformEphemeralResource" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.isTerraformEphemeralResource"></a>

```java
import io.cdktn.providers.aws.ephemeral_aws_sts_web_identity_token.EphemeralAwsStsWebIdentityToken;

EphemeralAwsStsWebIdentityToken.isTerraformEphemeralResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.expiration">expiration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.webIdentityToken">webIdentityToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.audienceInput">audienceInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.durationSecondsInput">durationSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.signingAlgorithmInput">signingAlgorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.audience">audience</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.durationSeconds">durationSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.signingAlgorithm">signingAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.lifecycle"></a>

```java
public TerraformEphemeralResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `expiration`<sup>Required</sup> <a name="expiration" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.expiration"></a>

```java
public java.lang.String getExpiration();
```

- *Type:* java.lang.String

---

##### `webIdentityToken`<sup>Required</sup> <a name="webIdentityToken" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.webIdentityToken"></a>

```java
public java.lang.String getWebIdentityToken();
```

- *Type:* java.lang.String

---

##### `audienceInput`<sup>Optional</sup> <a name="audienceInput" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.audienceInput"></a>

```java
public java.util.List<java.lang.String> getAudienceInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `durationSecondsInput`<sup>Optional</sup> <a name="durationSecondsInput" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.durationSecondsInput"></a>

```java
public java.lang.Number getDurationSecondsInput();
```

- *Type:* java.lang.Number

---

##### `signingAlgorithmInput`<sup>Optional</sup> <a name="signingAlgorithmInput" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.signingAlgorithmInput"></a>

```java
public java.lang.String getSigningAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.audience"></a>

```java
public java.util.List<java.lang.String> getAudience();
```

- *Type:* java.util.List<java.lang.String>

---

##### `durationSeconds`<sup>Required</sup> <a name="durationSeconds" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.durationSeconds"></a>

```java
public java.lang.Number getDurationSeconds();
```

- *Type:* java.lang.Number

---

##### `signingAlgorithm`<sup>Required</sup> <a name="signingAlgorithm" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.signingAlgorithm"></a>

```java
public java.lang.String getSigningAlgorithm();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralAwsStsWebIdentityTokenConfig <a name="EphemeralAwsStsWebIdentityTokenConfig" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.ephemeral_aws_sts_web_identity_token.EphemeralAwsStsWebIdentityTokenConfig;

EphemeralAwsStsWebIdentityTokenConfig.builder()
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformEphemeralResourceLifecycle)
//  .provider(TerraformProvider)
    .audience(java.util.List<java.lang.String>)
    .signingAlgorithm(java.lang.String)
//  .durationSeconds(java.lang.Number)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig.property.audience">audience</a></code> | <code>java.util.List<java.lang.String></code> | The intended recipients of the token (populates the `aud` claim in the JWT). |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig.property.signingAlgorithm">signingAlgorithm</a></code> | <code>java.lang.String</code> | The cryptographic algorithm to use for signing the JWT. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig.property.durationSeconds">durationSeconds</a></code> | <code>java.lang.Number</code> | The duration, in seconds, for which the JWT will remain valid. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/sts_web_identity_token#tags EphemeralAwsStsWebIdentityToken#tags}. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig.property.lifecycle"></a>

```java
public TerraformEphemeralResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig.property.audience"></a>

```java
public java.util.List<java.lang.String> getAudience();
```

- *Type:* java.util.List<java.lang.String>

The intended recipients of the token (populates the `aud` claim in the JWT).

Must contain between 1 and 10 items.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/sts_web_identity_token#audience EphemeralAwsStsWebIdentityToken#audience}

---

##### `signingAlgorithm`<sup>Required</sup> <a name="signingAlgorithm" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig.property.signingAlgorithm"></a>

```java
public java.lang.String getSigningAlgorithm();
```

- *Type:* java.lang.String

The cryptographic algorithm to use for signing the JWT.

Valid values are `RS256` (RSA with SHA-256) and `ES384` (ECDSA using P-384 curve with SHA-384).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/sts_web_identity_token#signing_algorithm EphemeralAwsStsWebIdentityToken#signing_algorithm}

---

##### `durationSeconds`<sup>Optional</sup> <a name="durationSeconds" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig.property.durationSeconds"></a>

```java
public java.lang.Number getDurationSeconds();
```

- *Type:* java.lang.Number

The duration, in seconds, for which the JWT will remain valid.

Value can range from 60 to 3600 seconds. Default is 300 seconds (5 minutes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/sts_web_identity_token#duration_seconds EphemeralAwsStsWebIdentityToken#duration_seconds}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/sts_web_identity_token#tags EphemeralAwsStsWebIdentityToken#tags}.

---




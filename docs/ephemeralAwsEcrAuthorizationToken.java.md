# `ephemeralAwsEcrAuthorizationToken` Submodule <a name="`ephemeralAwsEcrAuthorizationToken` Submodule" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralAwsEcrAuthorizationToken <a name="EphemeralAwsEcrAuthorizationToken" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/ephemeral-resources/ecr_authorization_token aws_ecr_authorization_token}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.Initializer"></a>

```java
import io.cdktn.providers.aws.ephemeral_aws_ecr_authorization_token.EphemeralAwsEcrAuthorizationToken;

EphemeralAwsEcrAuthorizationToken.Builder.create(Construct scope, java.lang.String id)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformEphemeralResourceLifecycle)
//  .provider(TerraformProvider)
//  .region(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/ephemeral-resources/ecr_authorization_token#region EphemeralAwsEcrAuthorizationToken#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.toTerraform">toTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this ephemeral resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.resetRegion"></a>

```java
public void resetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.isTerraformEphemeralResource">isTerraformEphemeralResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.isConstruct"></a>

```java
import io.cdktn.providers.aws.ephemeral_aws_ecr_authorization_token.EphemeralAwsEcrAuthorizationToken;

EphemeralAwsEcrAuthorizationToken.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.ephemeral_aws_ecr_authorization_token.EphemeralAwsEcrAuthorizationToken;

EphemeralAwsEcrAuthorizationToken.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformEphemeralResource` <a name="isTerraformEphemeralResource" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.isTerraformEphemeralResource"></a>

```java
import io.cdktn.providers.aws.ephemeral_aws_ecr_authorization_token.EphemeralAwsEcrAuthorizationToken;

EphemeralAwsEcrAuthorizationToken.isTerraformEphemeralResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.property.authorizationToken">authorizationToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.property.expiresAt">expiresAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.property.proxyEndpoint">proxyEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.property.userName">userName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.property.lifecycle"></a>

```java
public TerraformEphemeralResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `authorizationToken`<sup>Required</sup> <a name="authorizationToken" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.property.authorizationToken"></a>

```java
public java.lang.String getAuthorizationToken();
```

- *Type:* java.lang.String

---

##### `expiresAt`<sup>Required</sup> <a name="expiresAt" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.property.expiresAt"></a>

```java
public java.lang.String getExpiresAt();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `proxyEndpoint`<sup>Required</sup> <a name="proxyEndpoint" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.property.proxyEndpoint"></a>

```java
public java.lang.String getProxyEndpoint();
```

- *Type:* java.lang.String

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.property.userName"></a>

```java
public java.lang.String getUserName();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationToken.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralAwsEcrAuthorizationTokenConfig <a name="EphemeralAwsEcrAuthorizationTokenConfig" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationTokenConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.ephemeral_aws_ecr_authorization_token.EphemeralAwsEcrAuthorizationTokenConfig;

EphemeralAwsEcrAuthorizationTokenConfig.builder()
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformEphemeralResourceLifecycle)
//  .provider(TerraformProvider)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationTokenConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationTokenConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationTokenConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationTokenConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationTokenConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationTokenConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationTokenConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationTokenConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationTokenConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationTokenConfig.property.lifecycle"></a>

```java
public TerraformEphemeralResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationTokenConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.ephemeralAwsEcrAuthorizationToken.EphemeralAwsEcrAuthorizationTokenConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/ephemeral-resources/ecr_authorization_token#region EphemeralAwsEcrAuthorizationToken#region}

---




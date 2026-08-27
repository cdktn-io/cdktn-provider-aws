# `ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity` Submodule <a name="`ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity` Submodule" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity <a name="EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/cognito_identity_openid_token_for_developer_identity aws_cognito_identity_openid_token_for_developer_identity}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.Initializer"></a>

```typescript
import { ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity } from '@cdktn/provider-aws'

new ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity(scope: Construct, id: string, config: EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig">EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig">EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.toTerraform">toTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.resetIdentityId">resetIdentityId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.resetPrincipalTags">resetPrincipalTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.resetTokenDuration">resetTokenDuration</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this ephemeral resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetIdentityId` <a name="resetIdentityId" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.resetIdentityId"></a>

```typescript
public resetIdentityId(): void
```

##### `resetPrincipalTags` <a name="resetPrincipalTags" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.resetPrincipalTags"></a>

```typescript
public resetPrincipalTags(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTokenDuration` <a name="resetTokenDuration" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.resetTokenDuration"></a>

```typescript
public resetTokenDuration(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.isTerraformEphemeralResource">isTerraformEphemeralResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.isConstruct"></a>

```typescript
import { ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity } from '@cdktn/provider-aws'

ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.isTerraformElement"></a>

```typescript
import { ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity } from '@cdktn/provider-aws'

ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformEphemeralResource` <a name="isTerraformEphemeralResource" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.isTerraformEphemeralResource"></a>

```typescript
import { ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity } from '@cdktn/provider-aws'

ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.isTerraformEphemeralResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.token">token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.identityIdInput">identityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.identityPoolIdInput">identityPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.loginsInput">loginsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.principalTagsInput">principalTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.tokenDurationInput">tokenDurationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.identityId">identityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.identityPoolId">identityPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.logins">logins</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.principalTags">principalTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.tokenDuration">tokenDuration</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformEphemeralResourceLifecycle;
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

##### `identityIdInput`<sup>Optional</sup> <a name="identityIdInput" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.identityIdInput"></a>

```typescript
public readonly identityIdInput: string;
```

- *Type:* string

---

##### `identityPoolIdInput`<sup>Optional</sup> <a name="identityPoolIdInput" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.identityPoolIdInput"></a>

```typescript
public readonly identityPoolIdInput: string;
```

- *Type:* string

---

##### `loginsInput`<sup>Optional</sup> <a name="loginsInput" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.loginsInput"></a>

```typescript
public readonly loginsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `principalTagsInput`<sup>Optional</sup> <a name="principalTagsInput" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.principalTagsInput"></a>

```typescript
public readonly principalTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `tokenDurationInput`<sup>Optional</sup> <a name="tokenDurationInput" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.tokenDurationInput"></a>

```typescript
public readonly tokenDurationInput: number;
```

- *Type:* number

---

##### `identityId`<sup>Required</sup> <a name="identityId" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.identityId"></a>

```typescript
public readonly identityId: string;
```

- *Type:* string

---

##### `identityPoolId`<sup>Required</sup> <a name="identityPoolId" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.identityPoolId"></a>

```typescript
public readonly identityPoolId: string;
```

- *Type:* string

---

##### `logins`<sup>Required</sup> <a name="logins" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.logins"></a>

```typescript
public readonly logins: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `principalTags`<sup>Required</sup> <a name="principalTags" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.principalTags"></a>

```typescript
public readonly principalTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `tokenDuration`<sup>Required</sup> <a name="tokenDuration" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.tokenDuration"></a>

```typescript
public readonly tokenDuration: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig <a name="EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.Initializer"></a>

```typescript
import { ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity } from '@cdktn/provider-aws'

const ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig: ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.identityPoolId">identityPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/cognito_identity_openid_token_for_developer_identity#identity_pool_id EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity#identity_pool_id}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.logins">logins</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/cognito_identity_openid_token_for_developer_identity#logins EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity#logins}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.identityId">identityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/cognito_identity_openid_token_for_developer_identity#identity_id EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity#identity_id}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.principalTags">principalTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/cognito_identity_openid_token_for_developer_identity#principal_tags EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity#principal_tags}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.tokenDuration">tokenDuration</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/cognito_identity_openid_token_for_developer_identity#token_duration EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity#token_duration}. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformEphemeralResourceLifecycle;
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `identityPoolId`<sup>Required</sup> <a name="identityPoolId" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.identityPoolId"></a>

```typescript
public readonly identityPoolId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/cognito_identity_openid_token_for_developer_identity#identity_pool_id EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity#identity_pool_id}.

---

##### `logins`<sup>Required</sup> <a name="logins" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.logins"></a>

```typescript
public readonly logins: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/cognito_identity_openid_token_for_developer_identity#logins EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity#logins}.

---

##### `identityId`<sup>Optional</sup> <a name="identityId" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.identityId"></a>

```typescript
public readonly identityId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/cognito_identity_openid_token_for_developer_identity#identity_id EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity#identity_id}.

---

##### `principalTags`<sup>Optional</sup> <a name="principalTags" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.principalTags"></a>

```typescript
public readonly principalTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/cognito_identity_openid_token_for_developer_identity#principal_tags EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity#principal_tags}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/cognito_identity_openid_token_for_developer_identity#region EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity#region}

---

##### `tokenDuration`<sup>Optional</sup> <a name="tokenDuration" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.tokenDuration"></a>

```typescript
public readonly tokenDuration: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/cognito_identity_openid_token_for_developer_identity#token_duration EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity#token_duration}.

---




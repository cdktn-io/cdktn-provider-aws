# `networkmanagerTransitGatewayRegistration` Submodule <a name="`networkmanagerTransitGatewayRegistration` Submodule" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkmanagerTransitGatewayRegistration <a name="NetworkmanagerTransitGatewayRegistration" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/networkmanager_transit_gateway_registration aws_networkmanager_transit_gateway_registration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.Initializer"></a>

```java
import io.cdktn.providers.aws.networkmanager_transit_gateway_registration.NetworkmanagerTransitGatewayRegistration;

NetworkmanagerTransitGatewayRegistration.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .globalNetworkId(java.lang.String)
    .transitGatewayArn(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(NetworkmanagerTransitGatewayRegistrationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.Initializer.parameter.globalNetworkId">globalNetworkId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/networkmanager_transit_gateway_registration#global_network_id NetworkmanagerTransitGatewayRegistration#global_network_id}. |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.Initializer.parameter.transitGatewayArn">transitGatewayArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/networkmanager_transit_gateway_registration#transit_gateway_arn NetworkmanagerTransitGatewayRegistration#transit_gateway_arn}. |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/networkmanager_transit_gateway_registration#id NetworkmanagerTransitGatewayRegistration#id}. |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeouts">NetworkmanagerTransitGatewayRegistrationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `globalNetworkId`<sup>Required</sup> <a name="globalNetworkId" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.Initializer.parameter.globalNetworkId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/networkmanager_transit_gateway_registration#global_network_id NetworkmanagerTransitGatewayRegistration#global_network_id}.

---

##### `transitGatewayArn`<sup>Required</sup> <a name="transitGatewayArn" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.Initializer.parameter.transitGatewayArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/networkmanager_transit_gateway_registration#transit_gateway_arn NetworkmanagerTransitGatewayRegistration#transit_gateway_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/networkmanager_transit_gateway_registration#id NetworkmanagerTransitGatewayRegistration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeouts">NetworkmanagerTransitGatewayRegistrationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/networkmanager_transit_gateway_registration#timeouts NetworkmanagerTransitGatewayRegistration#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.putTimeouts"></a>

```java
public void putTimeouts(NetworkmanagerTransitGatewayRegistrationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeouts">NetworkmanagerTransitGatewayRegistrationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkmanagerTransitGatewayRegistration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.isConstruct"></a>

```java
import io.cdktn.providers.aws.networkmanager_transit_gateway_registration.NetworkmanagerTransitGatewayRegistration;

NetworkmanagerTransitGatewayRegistration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.networkmanager_transit_gateway_registration.NetworkmanagerTransitGatewayRegistration;

NetworkmanagerTransitGatewayRegistration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.networkmanager_transit_gateway_registration.NetworkmanagerTransitGatewayRegistration;

NetworkmanagerTransitGatewayRegistration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.networkmanager_transit_gateway_registration.NetworkmanagerTransitGatewayRegistration;

NetworkmanagerTransitGatewayRegistration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NetworkmanagerTransitGatewayRegistration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a NetworkmanagerTransitGatewayRegistration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NetworkmanagerTransitGatewayRegistration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NetworkmanagerTransitGatewayRegistration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/networkmanager_transit_gateway_registration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the NetworkmanagerTransitGatewayRegistration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference">NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.globalNetworkIdInput">globalNetworkIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeouts">NetworkmanagerTransitGatewayRegistrationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.transitGatewayArnInput">transitGatewayArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.globalNetworkId">globalNetworkId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.transitGatewayArn">transitGatewayArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.timeouts"></a>

```java
public NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference">NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference</a>

---

##### `globalNetworkIdInput`<sup>Optional</sup> <a name="globalNetworkIdInput" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.globalNetworkIdInput"></a>

```java
public java.lang.String getGlobalNetworkIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.timeoutsInput"></a>

```java
public IResolvable|NetworkmanagerTransitGatewayRegistrationTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeouts">NetworkmanagerTransitGatewayRegistrationTimeouts</a>

---

##### `transitGatewayArnInput`<sup>Optional</sup> <a name="transitGatewayArnInput" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.transitGatewayArnInput"></a>

```java
public java.lang.String getTransitGatewayArnInput();
```

- *Type:* java.lang.String

---

##### `globalNetworkId`<sup>Required</sup> <a name="globalNetworkId" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.globalNetworkId"></a>

```java
public java.lang.String getGlobalNetworkId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `transitGatewayArn`<sup>Required</sup> <a name="transitGatewayArn" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.transitGatewayArn"></a>

```java
public java.lang.String getTransitGatewayArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkmanagerTransitGatewayRegistrationConfig <a name="NetworkmanagerTransitGatewayRegistrationConfig" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.networkmanager_transit_gateway_registration.NetworkmanagerTransitGatewayRegistrationConfig;

NetworkmanagerTransitGatewayRegistrationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .globalNetworkId(java.lang.String)
    .transitGatewayArn(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(NetworkmanagerTransitGatewayRegistrationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.globalNetworkId">globalNetworkId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/networkmanager_transit_gateway_registration#global_network_id NetworkmanagerTransitGatewayRegistration#global_network_id}. |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.transitGatewayArn">transitGatewayArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/networkmanager_transit_gateway_registration#transit_gateway_arn NetworkmanagerTransitGatewayRegistration#transit_gateway_arn}. |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/networkmanager_transit_gateway_registration#id NetworkmanagerTransitGatewayRegistration#id}. |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeouts">NetworkmanagerTransitGatewayRegistrationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `globalNetworkId`<sup>Required</sup> <a name="globalNetworkId" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.globalNetworkId"></a>

```java
public java.lang.String getGlobalNetworkId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/networkmanager_transit_gateway_registration#global_network_id NetworkmanagerTransitGatewayRegistration#global_network_id}.

---

##### `transitGatewayArn`<sup>Required</sup> <a name="transitGatewayArn" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.transitGatewayArn"></a>

```java
public java.lang.String getTransitGatewayArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/networkmanager_transit_gateway_registration#transit_gateway_arn NetworkmanagerTransitGatewayRegistration#transit_gateway_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/networkmanager_transit_gateway_registration#id NetworkmanagerTransitGatewayRegistration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.timeouts"></a>

```java
public NetworkmanagerTransitGatewayRegistrationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeouts">NetworkmanagerTransitGatewayRegistrationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/networkmanager_transit_gateway_registration#timeouts NetworkmanagerTransitGatewayRegistration#timeouts}

---

### NetworkmanagerTransitGatewayRegistrationTimeouts <a name="NetworkmanagerTransitGatewayRegistrationTimeouts" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.networkmanager_transit_gateway_registration.NetworkmanagerTransitGatewayRegistrationTimeouts;

NetworkmanagerTransitGatewayRegistrationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/networkmanager_transit_gateway_registration#create NetworkmanagerTransitGatewayRegistration#create}. |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/networkmanager_transit_gateway_registration#delete NetworkmanagerTransitGatewayRegistration#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/networkmanager_transit_gateway_registration#create NetworkmanagerTransitGatewayRegistration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/networkmanager_transit_gateway_registration#delete NetworkmanagerTransitGatewayRegistration#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference <a name="NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.networkmanager_transit_gateway_registration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference;

new NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeouts">NetworkmanagerTransitGatewayRegistrationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|NetworkmanagerTransitGatewayRegistrationTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeouts">NetworkmanagerTransitGatewayRegistrationTimeouts</a>

---



